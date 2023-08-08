from django.urls import path, include
from rest_framework.routers import DefaultRouter
from expenses.views import DespesaViewSet

router = DefaultRouter()
router.register('despesa', DespesaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]