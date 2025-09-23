def list_cache_key(params: dict):
    # build a stable cache key for list views
    parts = [f"{k}={v}" for k, v in sorted(params.items())]
    return "blogs:list:" + "&".join(parts)

def detail_cache_key(slug: str):
    return f"blogs:detail:{slug}"
