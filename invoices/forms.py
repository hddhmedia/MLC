from django import forms
from .models import Invoice, PiInvoice, TienMat, TienTho, PoInvoice, TienMatOut
from customers.models import Customer

class MyModelChoiceField(forms.ModelChoiceField):
    def label_from_instance(self, obj):
        return obj.name

class InvoiceForm(forms.ModelForm):
    #customer = MyModelChoiceField(Customer.objects.all(), label='Khach Hang')
    phonenumber = forms.CharField(label='So dien thoai', max_length=15, disabled=True, required=False)
    address = forms.CharField(label='Dia Chi', max_length=100, disabled=True, required=False)
    class Meta:
        model = Invoice
        fields = ('customer', 'phonenumber', 'address')
class PiInvoiceForm(forms.ModelForm):
    class Meta:
        model = PiInvoice
        fields = ('piinvoice', 'sochi', 'tienchi', 'note')
  
class TienMatForm(forms.ModelForm):
    class Meta:
        model = TienMat
        fields = ('tienmat', 'note')

class TienThoForm(forms.ModelForm):
    #thanhtien = forms.DecimalField(label='Thành Tiền', max_digits=15,decimal_places=2, disabled=True, required=False)
    class Meta:
        model = TienTho
        fields = ('tientho', 'soluong', 'note')
        
class PoInvoiceForm(forms.ModelForm):
    class Meta:
        model = PoInvoice
        fields = ('poinvoice', 'tienchi', 'sochi', 'note')

class TienMatOutForm(forms.ModelForm):
    class Meta:
        model = TienMatOut
        fields = ('tienmato', 'note')
