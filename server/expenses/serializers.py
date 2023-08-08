from rest_framework.serializers import ModelSerializer
from expenses.models import Despesa

class DespesaSerializer(ModelSerializer):
    class Meta:
        model = Despesa
        fields = ('id', 'descricao', 'data', 'valor', 'pagamento')