# Generated by Django 2.0.5 on 2019-05-09 16:49

from decimal import Decimal
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('invoices', '0003_auto_20190509_1614'),
    ]

    operations = [
        migrations.CreateModel(
            name='TienMat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tienmat', models.DecimalField(blank=True, decimal_places=2, default=Decimal('0.00'), max_digits=12, null=True, verbose_name='Tiền Mặt:')),
                ('note', models.CharField(blank=True, max_length=50, null=True, verbose_name='Ghi Chú:')),
                ('invoice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tienmats', to='invoices.Invoice')),
            ],
        ),
    ]
