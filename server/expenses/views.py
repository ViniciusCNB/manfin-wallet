from rest_framework.viewsets import ModelViewSet
from expenses.models import Despesa
from expenses.serializers import DespesaSerializer


class DespesaViewSet(ModelViewSet):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer