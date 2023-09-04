from rest_framework.viewsets import ModelViewSet
from expenses.models import Despesa, Categoria, FormaPagamento
from expenses.serializers import DespesaSerializer, CategoriaSerializer, FormaPagamentoSerializer


class CategoriaViewSet(ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class FormaPagamentoViewSet(ModelViewSet):
    queryset = FormaPagamento.objects.all()
    serializer_class = FormaPagamentoSerializer


class DespesaViewSet(ModelViewSet):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer