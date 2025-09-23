# users/admin.py
from django.contrib import admin
from .models import User, Profile, Role, LoginHistory, AuditLog, EmailVerificationToken, TwoFactorDevice, BackupCode

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("email", "username", "is_active", "is_staff", "email_verified", "created_at")
    search_fields = ("email", "username")
    list_filter = ("is_active", "is_staff", "email_verified")
    readonly_fields = ("last_login", "created_at", "updated_at")
    filter_horizontal = ("roles",)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "timezone", "language")
    search_fields = ("user__email", "location")

@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)
    filter_horizontal = ("permissions",)

@admin.register(LoginHistory)
class LoginHistoryAdmin(admin.ModelAdmin):
    list_display = ("user", "timestamp", "ip_address", "successful")
    search_fields = ("user__email", "ip_address", "user_agent")
    readonly_fields = ("user", "timestamp", "ip_address", "user_agent", "successful", "metadata")

@admin.register(AuditLog)
class AuditLogAdmin(admin.ModelAdmin):
    list_display = ("action", "user", "target_user", "timestamp", "ip_address")
    search_fields = ("user__email", "target_user__email", "action")
    readonly_fields = ("action", "user", "target_user", "timestamp", "ip_address", "details")

admin.site.register(EmailVerificationToken)
admin.site.register(TwoFactorDevice)
admin.site.register(BackupCode)
