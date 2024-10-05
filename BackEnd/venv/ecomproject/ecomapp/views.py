from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Products
from .serializers import ProductsSerializers
import logging

logger = logging.getLogger(__name__)

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello World')

@api_view(['GET'])
def getProducts(request):
    try:
        products = Products.objects.all()
        serializers = ProductsSerializers(products, many=True)
        return Response(serializers.data)
    except Exception as e:
        logger.error(f"Error fetching products: {e}")
        return Response({"error": "Internal Server Error"}, status=500)
