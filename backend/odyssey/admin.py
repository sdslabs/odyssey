from django.contrib import admin
from odyssey.models import IssueModel, CustomUserModel

admin.site.register(IssueModel)
admin.site.register(CustomUserModel)