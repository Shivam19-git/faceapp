from django.db import models

class Student(models.Model):
   #ID created as primary key by default in DB
   name = models.CharField(max_length=100)
   face_image = models.ImageField(upload_to='face_previews/')

   class Meta:
        db_table = 'student'
        managed = False
        
   def __str__(self):
       return self.name

    