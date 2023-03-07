from django.urls import path, include
from project import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('all', views.user_project),
    path('<int:pk>/', views.user_project_details),
    path('<int:ppk>/expense/', include('expenses.urls')) 
]
