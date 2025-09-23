from django.db.models import Q
from django.conf import settings

POSTGRES = settings.DATABASES['default']['ENGINE'].endswith('postgresql')

def search_posts(qs, query: str):
    if not query:
        return qs
    if POSTGRES:
        # Weighted FTS: title (A) > summary (B) > content (C)
        from django.contrib.postgres.search import SearchVector, SearchRank, SearchQuery
        vector = (
            SearchVector('title', weight='A') +
            SearchVector('summary', weight='B') +
            SearchVector('content', weight='C')
        )
        search_query = SearchQuery(query)
        qs = qs.annotate(rank=SearchRank(vector, search_query)).filter(rank__gt=0.0).order_by('-rank', '-published_at')
        return qs
    # Fallback: icontains
    return qs.filter(
        Q(title__icontains=query) | Q(summary__icontains=query) | Q(content__icontains=query)
    ).order_by('-published_at')
