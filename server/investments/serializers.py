from rest_framework.serializers import ModelSerializer, SerializerMethodField
from investments.models import Acao, Instituicao

class InstituicaoSerializer(ModelSerializer):
    class Meta:
        model = Instituicao
        fields = ['nome']

class AcaoSerializer(ModelSerializer):
    valor_total = SerializerMethodField()

    class Meta:
        model = Acao
        fields = ('codigo', 'instituicao', 'data_atualizacao', 'quantidade', 'preco', 'valor_total')
    
    def get_valor_total(self, obj):
        return obj.valor_total