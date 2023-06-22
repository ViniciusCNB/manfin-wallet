from django.db.models import Model, CharField, OneToOneField, CASCADE, DateField, IntegerField, FloatField


class Instituicao(Model):
    nome = CharField(max_length=100, primary_key=True)


class Acao(Model):
    codigo = CharField(max_length=10, primary_key=True)
    instituicao = OneToOneField(Instituicao, on_delete=CASCADE)
    data_atualizacao = DateField()
    quantidade = IntegerField()
    preco = FloatField()
    
    @property
    def valor_total(self):
        return self.preco * self.quantidade