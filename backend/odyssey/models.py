from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from uuid import uuid4

# Create your models here.
class Task(models.Model):
    #title
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True) #description
    completed = models.BooleanField(default=False)
    #completed
    created_at = models.DateTimeField(auto_now_add=True) #created_at

    def __str__(self):
        #return the task title
        return self.title

class CustomUserModelManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        user = self.model(
            username=username,
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        user = self.create_user(
            username=username,
            email=email,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class CustomUserModel(AbstractBaseUser, PermissionsMixin):
    userId = models.CharField(max_length = 32, default = uuid4, primary_key = True, editable = False)
    username = models.CharField(max_length=32, unique=True, null = False, blank = False)
    email = models.EmailField(max_length = 100, null = False, blank = False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    active = models.BooleanField(default = True)

    is_staff = models.BooleanField(default = False)
    is_superuser = models.BooleanField(default = False)

    created_on = models.DateTimeField(auto_now_add = True, blank = True, null = True)
    updated_on = models.DateTimeField(auto_now = True)

    objects = CustomUserModelManager()

    class Meta:
        verbose_name = 'Custom User'
