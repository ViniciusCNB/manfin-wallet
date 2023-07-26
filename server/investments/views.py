from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
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

    def get_historico_acao(self, request, codigo):
        try:
            ocorrencias = HistoricoAcao.objects.filter(codigo=codigo)
            serializer = HistoricoAcaoSerializer(ocorrencias, many=True)
            return Response(serializer.data)
        except HistoricoAcao.DoesNotExist:
            return Response({'message': 'Aplicação não encontrada.'})

    