from ecomapp import views 
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('products/', views.getProducts, name="getProducts"),
]

urlpatterns += static(settings.MEDIA_URL, document_root =settings.MEDIA_ROOT)