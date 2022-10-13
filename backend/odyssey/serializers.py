from rest_framework import routers,serializers,viewsets
from .models import Task, CustomUserModel
from rest_framework.serializers import ModelSerializer
from django.conf import settings

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'completed', 'created_at']

class CustomUserModelSerializer(ModelSerializer):
    class Meta:
        model = CustomUserModel
        fields = [
            'name',
            'username',
            'field',
            'enrollmentNo',
            'contactNo',
            'email',
        ]

    def create(self, validated_data):
        user = CustomUserModel.objects.create_user(**validated_data)
        return user