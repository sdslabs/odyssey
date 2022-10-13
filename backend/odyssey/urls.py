from django.urls import path
from odyssey import views


urlpatterns = [
    path('tasks/', views.tasks),
    path('tasks/<int:pk>/', views.task_detail),
    path('github/', views.GitHubLogin.as_view(), name='github')
]