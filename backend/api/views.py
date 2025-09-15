from django.http import HttpResponse, JsonResponse
from .models import Student
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from .serializers import StudentSerializer


def hello_world(request):
    return JsonResponse({"message": "This is the message that fetched from the backend!"})

def student_list(request):
    student = list(Student.objects.values())
    return JsonResponse(student, safe=False)


class StudentUploadView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)