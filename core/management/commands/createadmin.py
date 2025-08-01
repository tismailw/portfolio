from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from decouple import config

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                email=config('ADMIN_EMAIL'),
                password=config('ADMIN_PASSWORD')
            )
            self.stdout.write('Superuser created.')
        else:
            self.stdout.write('Superuser already exists.')
