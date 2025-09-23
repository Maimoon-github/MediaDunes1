from django.contrib.sitemaps import Sitemap
from django.utils import timezone
from .models import Post

class PostSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.6

    def items(self):
        return Post.objects.filter(status='published', published_at__lte=timezone.now())

    def lastmod(self, obj):
        return obj.updated_at
