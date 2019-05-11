from django import forms
from .models import ProductIn, ProductOut, CongPo

class ProductInForm(forms.ModelForm):
    class Meta:
        model = ProductIn
        fields = ('name', 'sochi', 'tienchi', 'tuoi', 'note')

class ProductOutForm(forms.ModelForm):
    class Meta:
        model = ProductOut
        fields = ('name', 'congtho')

class CongPoForm(forms.ModelForm):
    class Meta:
        model = CongPo
        fields = ('name', 'tienchi', 'tuoi')
