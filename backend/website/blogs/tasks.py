from celery import shared_task
from django.core.cache import cache
from django.db.models import F
from .models import Post
from .cache_keys import detail_cache_key

@shared_task(ignore_result=True)
def increment_views(slug: str):
    try:
        Post.objects.filter(slug=slug).update(views_count=F('views_count') + 1)
        cache.delete(detail_cache_key(slug))
    except Exception:
        # swallow errors; analytics should not break requests
        pass
