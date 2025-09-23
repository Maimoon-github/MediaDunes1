# users/serializers.py
from django.contrib.auth import authenticate
from django.utils import timezone
from rest_framework import serializers
from .models import User, Profile, Role

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ["id", "name"]

class UserPublicSerializer(serializers.ModelSerializer):
    roles = RoleSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ["id", "email", "username", "first_name", "last_name", "email_verified", "roles"]

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["bio","avatar_url","location","timezone","language","privacy_settings","preferences"]

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ["id", "email", "username", "password"]

    def create(self, validated):
        password = validated.pop("password")
        user = User.objects.create_user(**validated)
        user.set_password(password)
        user.is_active = True  # set False if you want to block until verify
        user.save()
        # create profile
        Profile.objects.get_or_create(user=user)
        return user

class LoginSerializer(serializers.Serializer):
    email_or_username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    totp_code = serializers.CharField(required=False, allow_blank=True)

    def validate(self, attrs):
        ident = attrs["email_or_username"]
        password = attrs["password"]
        user = authenticate(email=ident, password=password) or authenticate(username=ident, password=password)
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        attrs["user"] = user
        return attrs

class MeSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ["id","email","username","first_name","last_name","email_verified","phone_number","profile"]

    def update(self, instance, validated_data):
        prof_data = validated_data.pop("profile", None)
        for k, v in validated_data.items():
            setattr(instance, k, v)
        instance.save()
        if prof_data:
            prof, _ = Profile.objects.get_or_create(user=instance)
            for k, v in prof_data.items():
                setattr(prof, k, v)
            prof.save()
        return instance
