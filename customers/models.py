from django.db import models
from django.core.validators import RegexValidator

from django.utils import timezone

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=50, verbose_name="Tên Khách Hàng:")
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17,
                                    blank=True) # validators should be a list
    address = models.CharField(max_length=250, verbose_name="Địa Chỉ:")
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
    
    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.updated = timezone.now()
        return super(Customer, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
