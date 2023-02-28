from django.db import models
from authentication.models import User

from project.models import Project
# from expenses.models import Expenses
# from category.models import Category
# Create your models here.
class Expense(models.Model):
    title = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=9, decimal_places=2)
    category = models.CharField(max_length=100)
    project = models.ForeignKey(Project, on_delete= models.CASCADE)
    
    
   