# Generated by Django 2.0.5 on 2019-05-03 17:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_congpo'),
        ('invoices', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PiInvoice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sochi', models.FloatField(blank=True, max_length=10, null=True, verbose_name='Số Chỉ: ')),
                ('tienchi', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Số Tiền/Chỉ:')),
                ('tienmat', models.DecimalField(blank=True, decimal_places=2, max_digits=12, null=True, verbose_name='Tiền Mặt:')),
                ('note', models.CharField(blank=True, max_length=50, null=True, verbose_name='Ghi Chú:')),
                ('invoice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='piinvoices', to='invoices.Invoice')),
                ('piinvoice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='piinvoices', to='products.ProductIn')),
            ],
        ),
    ]