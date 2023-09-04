from django.contrib import admin
from expenses.models import Despesa, Categoria, FormaPagamento


admin.site.register(Despesa)
admin.site.register(Categoria)
admin.site.register(FormaPagamento)
