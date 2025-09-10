from django.http import HttpResponse, JsonResponse
from .models import Student

def hello_world(request):
    return JsonResponse({"message": "This is the message that fetched from the backend!"})

def student_list(request):
    student = list(Student.objects.values())
    return JsonResponse(student, safe=False)
