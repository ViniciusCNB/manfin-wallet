from rest_framework.viewsets import ModelViewSet
from expenses.models import Despesa, Categoria
from expenses.serializers import DespesaSerializer, CategoriaSerializer


class CategoriaViewSet(ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class DespesaViewSet(ModelViewSet):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer