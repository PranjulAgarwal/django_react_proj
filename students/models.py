from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField("Name", max_length=240)
    rollno = models.CharField("RollNo", max_length=240)
    maths = models.CharField(max_length=20)
    phys = models.CharField(max_length=20)
    chem = models.CharField(max_length=20)
    total = models.CharField(max_length=20)
    perc = models.CharField(max_length=20)

    def __str__(self):
        return self.name