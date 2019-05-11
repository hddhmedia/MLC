$(function () {

	/* Functions */

	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-customer .modal-content").html("");
			$("#modal-customer").modal("show");
		    },
			success: function (data) {
			$("#modal-customer .modal-content").html(data.html_form);
		    }
		});
	};

	var saveForm = function () {
	    var form = $(this);
	    $.ajax({
		    url: form.attr("action"),
			data: form.serialize(),
			type: form.attr("method"),
			dataType: 'json',
			success: function (data) {
			if (data.form_is_valid) {
			    $("#customer-table tbody").html(data.html_customer_list);
			    $("#modal-customer").modal("hide");
			}
			else {
			    $("#modal-customer .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create customer
	$(".js-create-customer").click(loadForm);
	$("#modal-customer").on("submit", ".js-customer-create-form", saveForm);

	// Update customer
	$("#customer-table").on("click", ".js-update-customer", loadForm);
	$("#modal-customer").on("submit", ".js-customer-update-form", saveForm);
	
	// Delete customer
	$("#customer-table").on("click", ".js-delete-customer", loadForm);
	$("#modal-customer").on("submit", ".js-customer-delete-form", saveForm);
    });