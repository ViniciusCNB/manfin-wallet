from django.contrib import admin
from investments.models import Instituicao, Acao, HistoricoAcao

# Register your models here.

admin.site.register(Instituicao)
admin.site.register(Acao)
admin.site.register(HistoricoAcao)
