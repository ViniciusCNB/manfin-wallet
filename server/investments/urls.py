from django.urls import path, include
from rest_framework.routers import DefaultRouter
from investments.views import InstituicaoViewSet, AcaoViewSet, HistoricoAcaoViewSet

router = DefaultRouter()
router.register('instituicao', InstituicaoViewSet)
router.register('acao', AcaoViewSet)
router.register('historico-acao', HistoricoAcaoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('historico-acao/<str:codigo>/historico/', HistoricoAcaoViewSet.as_view({'get': 'get_historico_acao'}), name='historico-por-codigo')
]