from dataclasses import field
from .models import CustomUserModel, IssueModel, AnnoucementModel
from rest_framework.serializers import ModelSerializer

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

class IssueModelSerializer(ModelSerializer):
    class Meta:
        model = IssueModel
        fields = [
            'issue',
            'mentorName',
            'mentorId',
            'assigneeName',
            'assigneeId',
        ]

    def create(self, validated_data):
        issue = IssueModel.objects.create(**validated_data)
        return issue

class AnnoucementSerializer(ModelSerializer):
    class Meta:
        model = AnnoucementModel
        fields = [
            'title',
            'content',
            'date',
        ]

    def create(self, validated_data):
        annoucement = AnnoucementModel.objects.create(**validated_data)
        return annoucement