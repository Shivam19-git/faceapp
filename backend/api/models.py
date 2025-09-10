from django.db import models

class Student(models.Model):
   int_field = models.IntegerField(db_column='int', primary_key=True)
   name = models.CharField(max_length=100)
   age = models.IntegerField()

   class Meta:
        db_table = 'student'
        managed = False
        
   def __str__(self):
       return self.name
   
   