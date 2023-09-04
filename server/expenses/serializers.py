from rest_framework.serializers import ModelSerializer
from expenses.models import Despesa, Categoria, FormaPagamento


class CategoriaSerializer(ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id', 'descricao')


class FormaPagamentoSerializer(ModelSerializer):
    class Meta:
        model = FormaPagamento
        fields = ('id', 'descricao')


class DespesaSerializer(ModelSerializer):
    class Meta:
        model = Despesa 
        fields = ('id', 'descricao', 'data', 'valor', 'forma_pagamento', 'categoria', 'observacao')