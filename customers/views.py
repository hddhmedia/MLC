from django.shortcuts import render, get_object_or_404
from .models import Customer

from django.http import JsonResponse
from django.template.loader import render_to_string
from .forms import CustomerForm

# Create your views here.
def customer_list(request):
    customers = Customer.objects.all()
    return render(request, 'customers/customer_list.html', {'customers': customers})

def save_customer_form(request, form, template_name):
    print("AAAAAC")
    data = dict()
    if request.method == 'POST':
        print("BBBBC")
        if form.is_valid():
            print("DDDDc")
            form.save()
            data['form_is_valid'] = True
            customers = Customer.objects.all()
            data['html_customer_list'] = render_to_string('customers/includes/partial_customer_list.html', {
                'customers': customers
            })
        else:
            data['form_is_valid'] = False
    context = {'form': form}
    data['html_form'] = render_to_string(template_name, context, request=request)
    return JsonResponse(data)

def customer_create(request):
    if request.method == 'POST':
        print("XXXC")
        form = CustomerForm(request.POST)
    else:
        print("YYYC")
        form = CustomerForm()
    return save_customer_form(request, form, 'customers/includes/partial_customer_create.html')


def customer_update(request, pk):
    customer = get_object_or_404(Customer, pk=pk)
    if request.method == 'POST':
        form = CustomerForm(request.POST, instance=customer)
    else:
        form = CustomerForm(instance=customer)
    return save_customer_form(request, form, 'customers/includes/partial_customer_update.html')

def customer_delete(request, pk):
    customer = get_object_or_404(Customer, pk=pk)
    data = dict()
    if request.method == 'POST':
        customer.delete()
        data['form_is_valid'] = True  # This is just to play along with the existing code
        customers = Customer.objects.all()
        data['html_customer_list'] = render_to_string('customers/includes/partial_customer_list.html', {
            'customers': customers
        })
    else:
        context = {'customer': customer}
        data['html_form'] = render_to_string('customers/includes/partial_customer_delete.html',
            context,
            request=request,
        )
    return JsonResponse(data)
