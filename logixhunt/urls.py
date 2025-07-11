"""
URL configuration for logixhunt project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from ast import main
from django.contrib import admin
from django.urls import path
from main import views  # Import your views from the main app


urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('services/website-development/', views.website_development, name='website_development'),
    path('services/software-development/', views.software_development, name='software_development'),
    path('products/', views.products, name='products'),
    path('careers/', views.careers, name='careers'),
    path('contact/', views.contact, name='contact'),
    path('courses/', views.courses, name='courses'),
    path('services/', views.services, name='services'),
     path('portfolio/', views.portfolio, name='portfolio'),
     path('process/', views.process, name='process'),
    path('portfolio/<int:pk>/', views.portfolio_detail, name='portfolio_detail'),
    path('admin/', admin.site.urls),
    path('team/', views.team, name='team'),
    path('blog/', views.blog, name='blog'),
    path('blog/<int:pk>/', views.blog_detail, name='blog_detail'),
    path('faq/', views.faq, name='faq'),

]
