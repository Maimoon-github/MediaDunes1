import uuid
from django.db import models
from django.db.models import F, Sum
from django.contrib.auth import get_user_model
from django.utils.text import slugify
from django.core.validators import MinValueValidator

# Get the custom user model
User = get_user_model()


class BaseModel(models.Model):
    """
    An abstract base class model that provides common fields.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(BaseModel):
    """
    Model for blog post categories.
    """
    name = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(unique=True, max_length=120)
    description = models.TextField(blank=True)
    parent = models.ForeignKey(
        'self', on_delete=models.SET_NULL, null=True, blank=True, related_name='children'
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"


class Tag(BaseModel):
    """
    Model for blog post tags.
    """
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True, max_length=100)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Post(BaseModel):
    """
    Primary blog post model with full-text search and engagement fields.
    """
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('archived', 'Archived'),
    ]

    title = models.CharField(max_length=255, db_index=True)
    slug = models.SlugField(unique=True, max_length=255, db_index=True)
    summary = models.TextField()
    content = models.TextField()  # WYSIWYG content, will be sanitized on save
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    published_at = models.DateTimeField(null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='posts')
    tags = models.ManyToManyField(Tag, related_name='posts', blank=True)
    featured_image = models.URLField(
        max_length=500, null=True, blank=True
    )  # URL to CDN/S3
    canonical_url = models.URLField(max_length=500, blank=True, null=True)
    meta_title = models.CharField(max_length=255, blank=True)
    meta_description = models.CharField(max_length=320, blank=True)
    reading_time_minutes = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    views_count = models.PositiveIntegerField(default=0)
    allow_comments = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    @property
    def likes_count(self):
        """
        Calculates the total likes for the post.
        """
        return self.reactions.filter(type='like').count()

    class Meta:
        ordering = ['-published_at']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['status', 'published_at']),
        ]


class Comment(BaseModel):
    """
    Model for blog post comments.
    """
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    author_name = models.CharField(max_length=100, blank=True, null=True)
    author_email_hash = models.CharField(max_length=255, blank=True, null=True)
    parent = models.ForeignKey(
        'self', on_delete=models.SET_NULL, null=True, blank=True, related_name='replies'
    )
    content = models.TextField()  # Will be sanitized
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"Comment by {self.author_name or self.author} on {self.post.title}"


class Reaction(BaseModel):
    """
    Model for user reactions (e.g., likes).
    """
    TYPE_CHOICES = [
        ('like', 'Like'),
        ('love', 'Love'),
        # Add more reaction types as needed
    ]
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='reactions')
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True
    )  # Null for anonymous reactions
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)

    class Meta:
        unique_together = ('user', 'post', 'type')
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'post', 'type'], name='unique_reaction'
            )
        ]

    def __str__(self):
        return f"{self.user} reacted '{self.type}' on {self.post.title}"


class MediaAsset(BaseModel):
    """
    Model to track media assets uploaded for blog posts.
    """
    uploader = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, related_name='media_assets'
    )
    file_url = models.URLField(max_length=500, help_text="URL to S3/CloudFront")
    mime_type = models.CharField(max_length=100)
    width = models.IntegerField(null=True, blank=True)
    height = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"Media uploaded by {self.uploader} on {self.created_at.date()}"
