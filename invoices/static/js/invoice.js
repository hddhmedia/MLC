$(document).ready(function(){
	$('select[name=customer]').change(function(){
		customer_id = $(this).val();
		request_url = '/get_invoicecus/' + customer_id + '/';
		$.ajax({
			url: request_url,
			    success: function(data){
			    $("#id_phonenumber").val(data.phone);
			    $("#id_address").val(data.address);
			}
		    });
		return false;
	    })
	    });
