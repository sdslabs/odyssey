from .models import CustomUserModel
from rest_framework.serializers import ModelSerializer
from django.conf import settings

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