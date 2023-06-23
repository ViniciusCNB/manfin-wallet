from django.urls import path, include
from rest_framework.routers import DefaultRouter
from investments.views import InstituicaoViewSet, AcaoViewSet

router = DefaultRouter()
router.register('instituicao', InstituicaoViewSet)
router.register('acao', AcaoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]