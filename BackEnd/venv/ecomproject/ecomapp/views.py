from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Products
from .serializers import ProductsSerializers




@api_view(['GET'])
def getRoutes(request):
    return Response('Hello World')

@api_view(['GET'])
def getProducts(request):
        products = Products.objects.all()
        serializers = ProductsSerializers(products, many=True)
        return Response(serializers.data)
 
@api_view(['GET'])
def getProduct(request, pk):
        product = Products.objects.get(_id=pk)
        serializers = ProductsSerializers(product, many=False)
        return Response(serializers.data)