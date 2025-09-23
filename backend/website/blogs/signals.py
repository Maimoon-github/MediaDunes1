import math
import bleach
from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Post, Comment

# ALLOWED_TAGS = bleach.sanitizer.ALLOWED_TAGS + [
#     "p","br","strong","em","ul","ol","li","blockquote","code","pre","h2","h3","h4","h5","h6","img","a","figure","figcaption"
# ]

ALLOWED_TAGS = set(bleach.sanitizer.ALLOWED_TAGS).union({
    "p","br","strong","em","ul","ol","li","blockquote","code","pre",
    "h2","h3","h4","h5","h6","img","a","figure","figcaption"
})

ALLOWED_ATTRS = {
    "*": ["class", "id"],
    "a": ["href", "title", "rel", "target"],
    "img": ["src", "alt", "width", "height", "loading"]
}

@receiver(pre_save, sender=Post)
def clean_post_html(sender, instance: Post, **kwargs):
    if instance.content:
        instance.content = bleach.clean(instance.content, tags=ALLOWED_TAGS, attributes=ALLOWED_ATTRS, strip=True)
        # simple reading time: ~200 wpm on stripped text
        plain = bleach.clean(instance.content, tags=[], strip=True)
        words = len(plain.split())
        instance.reading_time_minutes = max(1, math.ceil(words/200))

@receiver(pre_save, sender=Comment)
def clean_comment_html(sender, instance: Comment, **kwargs):
    if instance.content:
        instance.content = bleach.clean(instance.content, tags=["strong","em","code","br","p"], attributes={}, strip=True)
