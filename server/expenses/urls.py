from django.urls import path, include
from rest_framework.routers import DefaultRouter
from expenses.views import DespesaViewSet, CategoriaViewSet

router = DefaultRouter()
router.register('despesa', DespesaViewSet)
router.register('categoria', CategoriaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]