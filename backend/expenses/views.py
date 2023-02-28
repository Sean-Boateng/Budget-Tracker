from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import ExpenseSerializer
from .models import Expense


# Create your views here.
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def expense_list(request, ppk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        expense = Expense.objects.filter(project_id=ppk)
        serializer = ExpenseSerializer(expense, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ExpenseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(project_id=ppk)
        return Response(serializer.data, status=status.HTTP_201_CREATED)





@api_view(['GET', 'PUT', 'DELETE'])
def expense_detail(request, ppk, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    project = get_object_or_404(Expense, pk=pk)
    if request.method == 'GET':
        serializer = ExpenseSerializer(project)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ExpenseSerializer(project, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(collection_id=ppk)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



