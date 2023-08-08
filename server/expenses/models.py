from django.db.models import Model, CharField, DateField, FloatField, AutoField


class Despesa(Model):
    id = AutoField(primary_key=True)
    descricao = CharField(max_length=200)
    data = DateField()
    valor = FloatField()
    pagamento = CharField(max_length=200)
