from django.utils.html import strip_tags
from rest_framework import serializers
from .models import Category, Tag, Post, Comment, Reaction, MediaAsset

class CategoryMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("name", "slug")

class TagMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("name", "slug")

class PostListSerializer(serializers.ModelSerializer):
    category = CategoryMiniSerializer(read_only=True)
    tags = TagMiniSerializer(read_only=True, many=True)
    likes_count = serializers.IntegerField(read_only=True)
    class Meta:
        model = Post
        fields = (
            "id", "title", "slug", "summary", "featured_image", "category", "tags",
            "published_at", "reading_time_minutes", "meta_title", "meta_description", "likes_count"
        )

class PostDetailSerializer(serializers.ModelSerializer):
    category = CategoryMiniSerializer(read_only=True)
    tags = TagMiniSerializer(read_only=True, many=True)
    author = serializers.SerializerMethodField()
    likes_count = serializers.IntegerField(read_only=True)

    def get_author(self, obj):
        if not obj.author:
            return None
        # Public-safe author payload
        return {"id": str(obj.author.id), "name": getattr(obj.author, "username", "author")}

    class Meta:
        model = Post
        fields = (
            "id", "title", "slug", "content", "author", "category", "tags",
            "published_at", "meta_title", "meta_description", "canonical_url",
            "views_count", "likes_count", "featured_image", "reading_time_minutes"
        )

class CommentPublicSerializer(serializers.ModelSerializer):
    author_display = serializers.SerializerMethodField()

    def get_author_display(self, obj):
        if obj.author and getattr(obj.author, "username", None):
            return obj.author.username
        return obj.author_name or "Anonymous"

    class Meta:
        model = Comment
        fields = ("id", "author_display", "content", "created_at")

class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ("author_name", "content")

class ReactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reaction
        fields = ("type",)

class MediaAssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaAsset
        fields = ("id", "file_url", "mime_type", "width", "height", "created_at")
