from django.contrib import admin
from odyssey.models import IssueModel, CustomUserModel,AnnouncementModel

admin.site.register(IssueModel)
admin.site.register(CustomUserModel)
admin.site.register(AnnouncementModel)