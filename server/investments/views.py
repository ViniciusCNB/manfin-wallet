from rest_framework.viewsets import ModelViewSet
from investments.models import Instituicao, Acao
from investments.serializers import InstituicaoSerializer, AcaoSerializer


class InstituicaoViewSet(ModelViewSet):
    queryset = Instituicao.objects.all()
    serializer_class = InstituicaoSerializer


class AcaoViewSet(ModelViewSet):
    queryset = Acao.objects.all()
    serializer_class = AcaoSerializer
    
