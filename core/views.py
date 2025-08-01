from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Project, Book, Profile, Course, Certification
from .serializers import (
    ProjectSerializer, BookSerializer, ProfileSerializer,
    CourseSerializer, CertificationSerializer
)

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all().order_by('-date_started')
    serializer_class = ProjectSerializer

class BookList(generics.ListAPIView):
    queryset = Book.objects.all().order_by('-date_added')
    serializer_class = BookSerializer

class ProfileDetail(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_object(self):
        return Profile.objects.first()  # assuming there's only one profile

class CourseList(generics.ListAPIView):
    queryset = Course.objects.all().order_by('-completion_date')
    serializer_class = CourseSerializer

class CertificationList(generics.ListAPIView):
    queryset = Certification.objects.all().order_by('-issue_date')
    serializer_class = CertificationSerializer
