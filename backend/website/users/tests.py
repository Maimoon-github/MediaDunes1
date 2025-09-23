# users/tests.py
from django.urls import reverse
from rest_framework.test import APITestCase
from users.models import User

class AuthFlowTests(APITestCase):
    def test_register_verify_login(self):
        r = self.client.post("/api/v1/auth/register/", {"email":"a@b.com","password":"S3curePass!"})
        self.assertEqual(r.status_code, 201)
        uid = r.data["id"]
        # simulate verification by setting flag (token flow is tested separately)
        u = User.objects.get(id=uid)
        u.email_verified = True
        u.save()

        r = self.client.post("/api/v1/auth/login/", {"email_or_username":"a@b.com","password":"S3curePass!"})
        self.assertEqual(r.status_code, 200)
        self.assertIn("access_token", r.data)

    def test_me_profile_update(self):
        u = User.objects.create_user(email="c@d.com", password="S3curePass!")
        r = self.client.post("/api/v1/auth/login/", {"email_or_username":"c@d.com","password":"S3curePass!"})
        tok = r.data["access_token"]
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {tok}")
        r2 = self.client.patch("/api/v1/users/me/", {"first_name":"Shehran","profile":{"language":"en","timezone":"Asia/Karachi"}} , format="json")
        self.assertEqual(r2.status_code, 200)
        self.assertEqual(r2.data["first_name"], "mediadunes")
        self.assertEqual(r2.data["profile"]["timezone"], "Asia/Karachi")
