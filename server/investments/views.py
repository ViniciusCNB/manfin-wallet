from rest_framework.viewsets import ModelViewSet
from investments.models import Instituicao, Acao, HistoricoAcao
from investments.serializers import InstituicaoSerializer, AcaoSerializer, HistoricoAcaoSerializer


class InstituicaoViewSet(ModelViewSet):
    queryset = Instituicao.objects.all()
    serializer_class = InstituicaoSerializer


class AcaoViewSet(ModelViewSet):
    queryset = Acao.objects.all()
    serializer_class = AcaoSerializer


class HistoricoAcaoViewSet(ModelViewSet):
    queryset = HistoricoAcao.objects.all()
    serializer_class = HistoricoAcaoSerializer
    