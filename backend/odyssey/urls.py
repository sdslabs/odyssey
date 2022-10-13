from django.urls import path
from odyssey import views


urlpatterns = [
    path('tasks/', views.tasks),
    path('tasks/<int:pk>/', views.task_detail),
    path('github/', views.GitHubLogin.as_view(), name='github'),
    path('update-user/', views.set_custom_user_details, name='update-user'),
    path('get-user/<str:userId>', views.get_custom_user_details, name='get-user')
]