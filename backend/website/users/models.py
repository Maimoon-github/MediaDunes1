# users/models.py
import uuid
from datetime import timedelta

from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, Permission
from django.core.validators import RegexValidator
from django.db import models
from django.utils import timezone

# ---- User Manager ----
from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra):
        if not email:
            raise ValueError("Email is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra):
        extra.setdefault("is_staff", False)
        extra.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra)

    def create_superuser(self, email, password, **extra):
        extra.setdefault("is_staff", True)
        extra.setdefault("is_superuser", True)
        if extra.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True")
        if extra.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")
        return self._create_user(email, password, **extra)


# ---- Core Models ----
class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)
    permissions = models.ManyToManyField(Permission, blank=True, related_name="roles")

    def __str__(self):
        return self.name


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True, db_index=True)
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    first_name = models.CharField(max_length=150, blank=True, default="")
    last_name = models.CharField(max_length=150, blank=True, default="")
    phone_number = models.CharField(
        max_length=32, null=True, blank=True,
        validators=[RegexValidator(r"^[0-9+\-() ]+$", "Invalid phone number")]
    )

    roles = models.ManyToManyField(Role, blank=True, related_name="users")

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    email_verified = models.BooleanField(default=False)
    phone_verified = models.BooleanField(default=False)

    last_login = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        indexes = [
            models.Index(fields=["email"]),
            models.Index(fields=["username"]),
        ]

    def __str__(self):
        return self.email


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(null=True, blank=True)
    avatar_url = models.URLField(null=True, blank=True)  # use presigned uploads
    location = models.CharField(max_length=255, null=True, blank=True)
    timezone = models.CharField(max_length=64, default="UTC")
    language = models.CharField(max_length=10, default="en")
    privacy_settings = models.JSONField(default=dict, blank=True)
    preferences = models.JSONField(default=dict, blank=True)

    def __str__(self):
        return f"Profile<{self.user_id}>"


class LoginHistory(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="login_history")
    timestamp = models.DateTimeField(auto_now_add=True)
    ip_address = models.CharField(max_length=64, null=True, blank=True)
    user_agent = models.TextField(null=True, blank=True)
    successful = models.BooleanField(default=False)
    metadata = models.JSONField(default=dict, blank=True)

    class Meta:
        ordering = ["-timestamp"]


class AuditLog(models.Model):
    ACTION_CHOICES = [
        ("password_change", "Password Change"),
        ("password_reset", "Password Reset"),
        ("email_change", "Email Change"),
        ("email_verify", "Email Verify"),
        ("role_assigned", "Role Assigned"),
        ("role_revoked", "Role Revoked"),
        ("2fa_enabled", "2FA Enabled"),
        ("2fa_disabled", "2FA Disabled"),
        ("login_failed", "Login Failed"),
        ("login_success", "Login Success"),
        ("export_requested", "Export Requested"),
        ("delete_requested", "Delete Requested"),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name="actor_logs")
    target_user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name="subject_logs")
    action = models.CharField(max_length=64, choices=ACTION_CHOICES)
    timestamp = models.DateTimeField(auto_now_add=True)
    ip_address = models.CharField(max_length=64, null=True, blank=True)
    details = models.JSONField(default=dict, blank=True)


class EmailVerificationToken(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    token = models.CharField(max_length=64, unique=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    @classmethod
    def create_for(cls, user, ttl_minutes=60):
        import secrets
        token = secrets.token_urlsafe(32)
        return cls.objects.create(
            user=user,
            token=token,
            expires_at=timezone.now() + timedelta(minutes=ttl_minutes),
        )

    def is_valid(self):
        return timezone.now() <= self.expires_at


# Store TOTP secret encrypted; keep this simple but swappable for a KMS field
class TwoFactorDevice(models.Model):
    T_TOTP = "totp"
    TYPE_CHOICES = [(T_TOTP, "TOTP")]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    type = models.CharField(max_length=16, choices=TYPE_CHOICES, default=T_TOTP)
    secret = models.CharField(max_length=128)  # wrap with field-level encryption in prod
    confirmed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)


class BackupCode(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="backup_codes")
    code_hash = models.CharField(max_length=128, db_index=True)  # store hashed code
    used = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
