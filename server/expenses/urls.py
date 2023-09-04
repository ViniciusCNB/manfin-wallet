from django.urls import path, include
from rest_framework.routers import DefaultRouter
from expenses.views import DespesaViewSet, CategoriaViewSet, FormaPagamentoViewSet

router = DefaultRouter()
router.register('despesa', DespesaViewSet)
router.register('categoria', CategoriaViewSet)
router.register('forma-pagamento', FormaPagamentoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]