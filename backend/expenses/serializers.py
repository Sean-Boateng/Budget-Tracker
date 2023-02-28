from rest_framework import serializers
from .models import Expense

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id', 'title','amount','category']
        optional_fields = [ 'project']
        extra_kwargs = {
            'project': {'write_only': True},
            
        }
        depth = 1
