# Generated by Django 4.2.2 on 2023-08-08 05:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Despesa',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('descricao', models.CharField(max_length=200)),
                ('data', models.DateField()),
                ('valor', models.FloatField()),
                ('pagamento', models.CharField(max_length=200)),
            ],
        ),
    ]
