from django.contrib import admin
from django.apps import apps


# Automatically register all models in this app with the admin site.
app_models = apps.get_app_config('services').get_models()
for model in app_models:
	try:
		admin.site.register(model)
	except admin.sites.AlreadyRegistered:
		pass
