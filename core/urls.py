from django.urls import path
from .views import ProjectList, BookList, ProfileDetail, CourseList, CertificationList

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='projects'),
    path('books/', BookList.as_view(), name='books'),
    path('profile/', ProfileDetail.as_view(), name='profile'),
    path('courses/', CourseList.as_view(), name='courses'),
    path('certifications/', CertificationList.as_view(), name='certifications'),
]
