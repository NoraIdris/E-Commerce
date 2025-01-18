from rest_framework import serializers
from .models import  Products
from django.contrib.auth.models import User


class ProductsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields='__all__'
        
class ProductsSerializers(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'        