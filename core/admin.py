from django.contrib import admin
from .models import Project, Book, Profile, Course, Certification

# Register your models here.

admin.site.register(Project)
admin.site.register(Book)
admin.site.register(Profile)
admin.site.register(Course)
admin.site.register(Certification)
