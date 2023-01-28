from django.db import models

class Treatment(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=150)
    status = models.BooleanField()
    
class Symptom(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=150)
    status = models.BooleanField()
    
class Diagnostic(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=150)
    status = models.BooleanField()
    