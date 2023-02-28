from django.urls import path, include
from expenses import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('all', views.expense_list),
    path('<int:pk>/', views.expense_detail),   
]