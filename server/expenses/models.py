from django.db.models import Model, CharField, DateField, FloatField, AutoField, ForeignKey, CASCADE


class Categoria(Model):
    id = AutoField(primary_key=True)
    descricao = CharField(max_length=100)


class FormaPagamento(Model):
    id = AutoField(primary_key=True)
    descricao = CharField(max_length=100)


class Despesa(Model):
    id = AutoField(primary_key=True)
    descricao = CharField(max_length=200)
    data = DateField()
    valor = FloatField()
    forma_pagamento = ForeignKey(FormaPagamento, on_delete=CASCADE, default=None)
    categoria = ForeignKey(Categoria, on_delete=CASCADE, default=None)
    observacao = CharField(max_length=200, null=True, blank=True)
