from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.JSONField()
    github_url = models.URLField(blank=True)
    external_url = models.URLField(blank=True)
    status = models.CharField(max_length=50, choices=[
        ('In Design/Planning', 'In Design/Planning'),
        ('In Development', 'In Development'), ('Completed', 'Completed')
        ])
    date_started = models.DateField()
    date_completed = models.DateField(null=True, blank=True)
    image = models.ImageField(upload_to='book_covers/', null=True, blank=True)

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    genres = models.JSONField()
    reading_status = models.CharField(max_length=50, choices=[
        ('Currently Reading', 'Currently Reading'), 
        ('Finished', 'Finished'), ('To Be Read', 'To Be Read')
        ])
    date_added = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='book_covers/', null=True, blank=True)



class Profile(models.Model):
    name = models.CharField(max_length=200)
    bio = models.TextField()
    location = models.CharField(max_length=200)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    email = models.EmailField(blank=True)



class Course(models.Model):
    title = models.CharField(max_length=200)
    provider = models.CharField(max_length=200)  # e.g., Coursera, edX
    platform = models.CharField(max_length=200, blank=True)  # e.g., LinkedIn Learning
    completion_date = models.DateField(null=True, blank=True)
    url = models.URLField(blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='book_covers/', null=True, blank=True)
    def __str__(self):
        return f"{self.title} ({self.provider})"


class Certification(models.Model):
    name = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200)  # e.g., AWS, Microsoft
    issue_date = models.DateField(null=True, blank=True)
    expiration_date = models.DateField(null=True, blank=True)
    credential_id = models.CharField(max_length=100, blank=True)
    credential_url = models.URLField(blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='book_covers/', null=True, blank=True)
    def __str__(self):
        return f"{self.name} ({self.issuer})"
