from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PublicPostViewSet, CategoryViewSet, TagViewSet,
    CommentViewSet, ReactionViewSet, AdminPostViewSet
)


router = DefaultRouter()
router.register("blogs", PublicPostViewSet, basename="blogs")
router.register("categories", CategoryViewSet, basename="blog-categories")
router.register("tags", TagViewSet, basename="blog-tags")

admin_router = DefaultRouter()
admin_router.register("blogs", AdminPostViewSet, basename="admin-blogs")

urlpatterns = [
    path("api/", include(router.urls)),
    path("api/blogs/<slug:slug>/comments/", CommentViewSet.as_view({"get":"list","post":"create"}), name="blog-comments"),
    path("api/blogs/<slug:slug>/reactions/", ReactionViewSet.as_view({"post":"create","delete":"destroy"}), name="blog-reactions"),
    path("api/admin/", include(admin_router.urls)),
]
