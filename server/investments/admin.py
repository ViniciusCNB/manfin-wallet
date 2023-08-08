from django.contrib import admin
from investments.models import Instituicao, Acao, HistoricoAcao


admin.site.register(Instituicao)
admin.site.register(Acao)
admin.site.register(HistoricoAcao)
