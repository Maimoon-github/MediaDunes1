from django.contrib import admin
from django.apps import apps
from .models import Category, Tag, Post, Comment, Reaction, MediaAsset

# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'parent']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'slug', 'status', 'author', 'category', 'published_at',
        'views_count', 'likes_count'
    ]
    list_filter = ['status', 'category', 'tags', 'published_at', 'author']
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ['title', 'summary', 'content', 'author__username']
    raw_id_fields = ['author']
    filter_horizontal = ['tags']
    readonly_fields = ['views_count', 'likes_count', 'created_at', 'updated_at']
    actions = ['make_published', 'make_draft', 'make_archived']

    def make_published(self, request, queryset):
        queryset.update(status='published')
    make_published.short_description = "Mark selected posts as published"

    def make_draft(self, request, queryset):
        queryset.update(status='draft')
    make_draft.short_description = "Mark selected posts as draft"

    def make_archived(self, request, queryset):
        queryset.update(status='archived')
    make_archived.short_description = "Mark selected posts as archived"

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['post', 'author', 'is_approved', 'created_at']
    list_filter = ['is_approved', 'created_at']
    search_fields = ['post__title', 'author__username', 'content']
    actions = ['approve_comments']

    def approve_comments(self, request, queryset):
        queryset.update(is_approved=True)
    approve_comments.short_description = "Approve selected comments"

@admin.register(Reaction)
class ReactionAdmin(admin.ModelAdmin):
    list_display = ['post', 'user', 'type', 'created_at']
    list_filter = ['type']
    search_fields = ['post__title', 'user__username']

@admin.register(MediaAsset)
class MediaAssetAdmin(admin.ModelAdmin):
    list_display = ['file_url', 'uploader', 'mime_type', 'created_at']
    search_fields = ['file_url', 'uploader__username']
