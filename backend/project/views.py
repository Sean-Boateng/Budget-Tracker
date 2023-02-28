from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Project
from .serializers import ProjectSerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_project(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        project = Project.objects.filter(user_id=request.user.id)
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data)



@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def user_project_details(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    project = get_object_or_404(Project, pk=pk)
    if request.method == 'GET':
        serializer = ProjectSerializer(project)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ProjectSerializer(project, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


        # return Response(status=status.HTTP_204_NO_CONTENT)
