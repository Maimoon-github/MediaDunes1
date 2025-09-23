from django.utils import timezone
from django.core.cache import cache
from django.shortcuts import get_object_or_404
from django.db.models import Prefetch
from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response

from .models import Post, Category, Tag, Comment, Reaction
from .serializers import (
    PostListSerializer, PostDetailSerializer, CategoryMiniSerializer, TagMiniSerializer,
    CommentPublicSerializer, CommentCreateSerializer, ReactionSerializer
)
from .permissions import IsStaffOrReadOnly
from .search import search_posts
from .cache_keys import list_cache_key, detail_cache_key
from .tasks import increment_views

PUBLIC_FILTER = dict(status='published')

def published_qs():
    return (Post.objects.filter(**PUBLIC_FILTER, published_at__lte=timezone.now())
            .select_related('author', 'category')
            .prefetch_related('tags'))

class PublicPostViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    lookup_field = 'slug'
    permission_classes = [AllowAny]

    def list(self, request, *args, **kwargs):
        qs = published_qs()
        category = request.GET.get("category")
        tag = request.GET.get("tag")
        author = request.GET.get("author")
        q = request.GET.get("q")
        ordering = request.GET.get("ordering", "-published_at")

        if category:
            qs = qs.filter(category__slug=category)
        if tag:
            qs = qs.filter(tags__slug=tag)
        if author:
            qs = qs.filter(author__id=author)

        if q:
            qs = search_posts(qs, q)

        # tie-break by engagement if same date
        if ordering == "relevance" and not q:
            ordering = "-published_at"
        if ordering not in ["-published_at", "published_at", "relevance", "views", "-views"]:
            ordering = "-published_at"
        if ordering == "views":
            qs = qs.order_by("views_count")
        elif ordering == "-views":
            qs = qs.order_by("-views_count")
        elif ordering == "relevance" and q:
            # handled by search_posts
            pass
        else:
            qs = qs.order_by(ordering, "-views_count")

        params = dict(category=category or "", tag=tag or "", author=author or "", q=q or "", ordering=ordering or "", page=request.GET.get("page","1"), page_size=request.GET.get("page_size",""))
        key = list_cache_key(params)
        page = cache.get(key)
        if not page:
            page = self.paginate_queryset(qs)
            cache.set(key, page, timeout=120)  # 2 minutes
        serializer = PostListSerializer(page, many=True)
        return self.get_paginated_response(serializer.data)

    def retrieve(self, request, slug=None, *args, **kwargs):
        key = detail_cache_key(slug)
        data = cache.get(key)
        if not data:
            obj = get_object_or_404(published_qs(), slug=slug)
            data = PostDetailSerializer(obj).data
            cache.set(key, data, 3600)  # 1 hour
        # increment views asynchronously
        increment_views.delay(slug)
        return Response(data)

class CategoryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoryMiniSerializer
    permission_classes = [AllowAny]

class TagViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagMiniSerializer
    permission_classes = [AllowAny]

class CommentViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    permission_classes = [AllowAny]
    lookup_field = 'slug'

    def get_queryset(self):
        post = get_object_or_404(published_qs(), slug=self.kwargs["slug"])
        return (Comment.objects.filter(post=post, is_approved=True)
                .order_by("created_at"))

    def list(self, request, slug=None, *args, **kwargs):
        qs = self.get_queryset()
        serializer = CommentPublicSerializer(qs, many=True)
        return Response(serializer.data)

    def create(self, request, slug=None, *args, **kwargs):
        post = get_object_or_404(published_qs(), slug=slug)
        if not post.allow_comments:
            return Response({"detail": "Comments are disabled."}, status=400)
        ser = CommentCreateSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        Comment.objects.create(
            post=post,
            author=request.user if request.user.is_authenticated else None,
            author_name=ser.validated_data.get("author_name"),
            content=ser.validated_data["content"],
            is_approved=(request.user.is_authenticated and request.user.is_staff)
        )
        return Response({"status": "submitted"}, status=201)

class ReactionViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]  # you can swap to IsAuthenticated if desired

    def create(self, request, slug=None):
        post = get_object_or_404(published_qs(), slug=slug)
        reaction_type = request.data.get("type", "like")
        if request.user.is_authenticated:
            Reaction.objects.get_or_create(post=post, user=request.user, type=reaction_type)
        else:
            # anonymous reaction keyed by session
            anon_key = f"anon:{request.session.session_key or 'nokey'}:{post.id}:{reaction_type}"
            if cache.get(anon_key):
                return Response({"status": "ok"})  # dedupe for anon within TTL
            Reaction.objects.create(post=post, user=None, type=reaction_type)
            cache.set(anon_key, 1, 60 * 60)
        return Response({"status": "ok"}, status=201)

    def destroy(self, request, slug=None):
        post = get_object_or_404(published_qs(), slug=slug)
        reaction_type = request.data.get("type", "like")
        if request.user.is_authenticated:
            Reaction.objects.filter(post=post, user=request.user, type=reaction_type).delete()
        return Response(status=204)

# --- Admin CRUD (staff only) ---
class AdminPostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().select_related('author', 'category').prefetch_related('tags')
    permission_classes = [IsAdminUser]
    lookup_field = 'slug'

    def get_serializer_class(self):
        return PostDetailSerializer if self.action in ["retrieve","update","partial_update","create"] else PostListSerializer

    @action(detail=False, methods=["get"], url_path="analytics")
    def analytics(self, request):
        # minimal example analytics
        top = list(self.get_queryset().order_by("-views_count")[:10].values("title","slug","views_count"))
        return Response({"top_posts": top})
