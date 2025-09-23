# users/tasks.py
from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail
from django.urls import reverse
from django.contrib.auth.hashers import make_password
import json, csv, io
from django.utils import timezone
from .models import User, EmailVerificationToken, BackupCode, AuditLog

@shared_task
def send_email_verification(user_id, token):
    user = User.objects.get(id=user_id)
    url = f"{settings.FRONTEND_BASE_URL}/verify-email?token={token}"
    send_mail(
        "Verify your email",
        f"Click to verify: {url}",
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        fail_silently=True,
    )

@shared_task
def send_password_reset(user_id, token):
    user = User.objects.get(id=user_id)
    url = f"{settings.FRONTEND_BASE_URL}/reset-password?uid={user.id}&token={token}"
    send_mail(
        "Password reset",
        f"Reset link: {url}",
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        fail_silently=True,
    )

@shared_task
def generate_backup_codes(user_id, count=10):
    import secrets
    user = User.objects.get(id=user_id)
    BackupCode.objects.filter(user=user).delete()
    codes = []
    for _ in range(count):
        code = secrets.token_urlsafe(6)
        BackupCode.objects.create(user=user, code_hash=make_password(code))
        codes.append(code)
    AuditLog.objects.create(user=user, action="2fa_enabled", details={"backup_codes": count})
    return codes  # return plain codes to caller (never store plaintext)

@shared_task
def export_user_data(user_id):
    user = User.objects.get(id=user_id)
    data = {
        "user": {
            "id": str(user.id),
            "email": user.email,
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "created_at": user.created_at.isoformat(),
        },
        "profile": getattr(user, "profile", None) and {
            "bio": user.profile.bio,
            "location": user.profile.location,
            "timezone": user.profile.timezone,
            "language": user.profile.language,
            "preferences": user.profile.preferences,
            "privacy_settings": user.profile.privacy_settings,
        },
    }
    # Save to storage; here we just return JSON string (replace with S3 upload)
    return json.dumps(data)

@shared_task
def schedule_account_deletion(user_id, delay_days=30):
    # In real systems, mark as pending and a periodic task purges after grace period.
    user = User.objects.get(id=user_id)
    user.is_active = False
    user.save(update_fields=["is_active"])
    AuditLog.objects.create(user=user, action="delete_requested", details={"grace_days": delay_days})
