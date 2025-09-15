from django.urls import path
from .views import hello_world, student_list, StudentUploadView

urlpatterns = [
    path('hello/', hello_world, name='hello_world'),
    path('student/', student_list, name='student_list'),
    path('upload-student/', StudentUploadView.as_view(), name='upload_student'),
]