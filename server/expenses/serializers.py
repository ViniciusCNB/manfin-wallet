from rest_framework.serializers import ModelSerializer
from expenses.models import Despesa, Categoria


class CategoriaSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id', 'descricao')


class DespesaSerializer(ModelSerializer):
    class Meta:
        model = Despesa
        fields = ('id', 'descricao', 'data', 'valor', 'pagamento', 'categoria')