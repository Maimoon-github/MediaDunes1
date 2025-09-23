# users/views.py
import json
from django.contrib.auth import login, logout
from django.db import transaction
from django.utils import timezone
from rest_framework import views, viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
import pyotp

from .models import User, Profile, LoginHistory, AuditLog, EmailVerificationToken, TwoFactorDevice, BackupCode
from .serializers import RegisterSerializer, LoginSerializer, MeSerializer, UserPublicSerializer
from .permissions import IsAdminUserRole

def _issue_tokens(user):
    refresh = RefreshToken.for_user(user)
    return {"access": str(refresh.access_token), "refresh": str(refresh)}

class RegisterView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        ser = RegisterSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        user = ser.save()
        # send verify email async
        from .tasks import send_email_verification
        token_obj = EmailVerificationToken.create_for(user)
        send_email_verification.delay(user.id, token_obj.token)
        return Response(UserPublicSerializer(user).data, status=201)

class LoginView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        ser = LoginSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        user = ser.validated_data["user"]

        # If user has 2FA device, require totp_code or valid backup
        has_2fa = TwoFactorDevice.objects.filter(user=user, confirmed=True).exists()
        totp_code = request.data.get("totp_code", "")
        if has_2fa:
            valid = False
            for dev in TwoFactorDevice.objects.filter(user=user, confirmed=True):
                totp = pyotp.TOTP(dev.secret)
                if totp.verify(totp_code, valid_window=1):
                    valid = True
                    break
            if not valid:
                # check backup codes
                if totp_code:
                    from django.contrib.auth.hashers import check_password
                    bc = BackupCode.objects.filter(user=user, used=False)
                    for b in bc:
                        if check_password(totp_code, b.code_hash):
                            b.used = True
                            b.save(update_fields=["used"])
                            valid = True
                            break
                if not valid:
                    LoginHistory.objects.create(user=user, successful=False, ip_address=request.META.get("REMOTE_ADDR"), user_agent=request.META.get("HTTP_USER_AGENT",""))
                    AuditLog.objects.create(user=user, action="login_failed", ip_address=request.META.get("REMOTE_ADDR"), details={"reason": "2FA required/invalid"})
                    return Response({"detail":"2FA code required or invalid"}, status=401)

        tokens = _issue_tokens(user)
        LoginHistory.objects.create(user=user, successful=True, ip_address=request.META.get("REMOTE_ADDR"), user_agent=request.META.get("HTTP_USER_AGENT",""))
        AuditLog.objects.create(user=user, action="login_success", ip_address=request.META.get("REMOTE_ADDR"))
        return Response({"access_token": tokens["access"], "refresh_token": tokens["refresh"], "user": UserPublicSerializer(user).data})

class LogoutView(views.APIView):
    def post(self, request):
        try:
            refresh = RefreshToken(request.data.get("refresh"))
            refresh.blacklist()
        except Exception:
            pass
        logout(request)
        return Response(status=204)

class EmailVerifyView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        token = request.data.get("token")
        try:
            tok = EmailVerificationToken.objects.select_related("user").get(token=token)
        except EmailVerificationToken.DoesNotExist:
            return Response({"detail": "Invalid token"}, status=400)
        if not tok.is_valid():
            return Response({"detail": "Token expired"}, status=400)
        user = tok.user
        user.email_verified = True
        user.save(update_fields=["email_verified"])
        tok.delete()
        AuditLog.objects.create(user=user, action="email_verify", details={})
        return Response({"detail": "Email verified"})

class PasswordResetRequestView(views.APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        email = request.data.get("email")
        user = User.objects.filter(email=email).first()
        if user:
            from .tasks import send_password_reset
            from django.contrib.auth.tokens import default_token_generator
            token = default_token_generator.make_token(user)
            send_password_reset.delay(user.id, token)
        return Response({"detail":"If the email exists, a reset link was sent."})

class PasswordResetConfirmView(views.APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        uid = request.data.get("uid")
        token = request.data.get("token")
        new_password = request.data.get("new_password")
        try:
            user = User.objects.get(id=uid)
        except User.DoesNotExist:
            return Response({"detail":"Invalid uid"}, status=400)
        from django.contrib.auth.tokens import default_token_generator
        if not default_token_generator.check_token(user, token):
            AuditLog.objects.create(user=user, action="password_reset", details={"status":"failed"})
            return Response({"detail":"Invalid token"}, status=400)
        user.set_password(new_password)
        user.save()
        AuditLog.objects.create(user=user, action="password_reset", details={"status":"success"})
        return Response({"detail":"Password updated"})

class MeView(views.APIView):
    def get(self, request):
        return Response(MeSerializer(request.user).data)
    def put(self, request):
        ser = MeSerializer(instance=request.user, data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)
    def patch(self, request):
        ser = MeSerializer(instance=request.user, data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)

class UserPublicViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserPublicSerializer
    permission_classes = [permissions.AllowAny]

class TwoFAView(views.APIView):
    def get(self, request):
        devices = TwoFactorDevice.objects.filter(user=request.user).values("id","type","confirmed","created_at")
        return Response(list(devices))

    @transaction.atomic
    def post(self, request):
        # enable/initiate
        secret = pyotp.random_base32()
        dev = TwoFactorDevice.objects.create(user=request.user, secret=secret, confirmed=False)
        uri = pyotp.totp.TOTP(secret).provisioning_uri(name=request.user.email, issuer_name="RoyalStep")
        return Response({"otpauth_uri": uri, "secret": secret, "device_id": dev.id})

    @transaction.atomic
    def delete(self, request):
        TwoFactorDevice.objects.filter(user=request.user).delete()
        AuditLog.objects.create(user=request.user, action="2fa_disabled")
        return Response(status=204)

    @action(detail=False, methods=["post"])
    def confirm(self, request):
        code = request.data.get("code")
        dev_id = request.data.get("device_id")
        try:
            dev = TwoFactorDevice.objects.get(id=dev_id, user=request.user)
        except TwoFactorDevice.DoesNotExist:
            return Response({"detail":"Device not found"}, status=404)
        if pyotp.TOTP(dev.secret).verify(code, valid_window=1):
            dev.confirmed = True
            dev.save(update_fields=["confirmed"])
            AuditLog.objects.create(user=request.user, action="2fa_enabled")
            return Response({"detail":"2FA enabled"})
        return Response({"detail":"Invalid code"}, status=400)
