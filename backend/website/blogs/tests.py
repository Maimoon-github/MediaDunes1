from django.test import TestCase
from django.contrib.auth import get_user_model
from django.utils import timezone
from blogs.models import Post, Category

User = get_user_model()

class BlogPublicApiTests(TestCase):
    def setUp(self):
        self.user = User.objects.create(username="editor")
        self.cat = Category.objects.create(name="Home Services", slug="home-services")
        self.post = Post.objects.create(
            title="Hello Dubai",
            slug="hello-dubai",
            summary="Summary",
            content="<p>Safe <script>alert(1)</script> content</p>",
            status="published",
            published_at=timezone.now(),
            author=self.user,
            category=self.cat
        )

    def test_list_published(self):
        res = self.client.get("/api/blogs/")
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.data["count"], 1)

    def test_detail_published(self):
        res = self.client.get("/api/blogs/hello-dubai/")
        self.assertEqual(res.status_code, 200)
        self.assertIn("content", res.data)
        self.assertNotIn("<script", res.data["content"])
