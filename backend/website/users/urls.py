# users/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RegisterView, LoginView, LogoutView, EmailVerifyView,
    PasswordResetRequestView, PasswordResetConfirmView,
    MeView, UserPublicViewSet, TwoFAView
)

router = DefaultRouter()
router.register(r'users', UserPublicViewSet, basename='users-public')

urlpatterns = [
    path("auth/register/", RegisterView.as_view()),
    path("auth/login/", LoginView.as_view()),
    path("auth/logout/", LogoutView.as_view()),
    path("auth/email-verify/", EmailVerifyView.as_view()),
    path("auth/password-reset/", PasswordResetRequestView.as_view()),
    path("auth/password-reset/confirm/", PasswordResetConfirmView.as_view()),
    path("users/me/", MeView.as_view()),
    path("users/me/2fa/", TwoFAView.as_view()),
    path("", include(router.urls)),
]
