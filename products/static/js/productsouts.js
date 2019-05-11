$(function () {

	/* Functions */

	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-productsout").modal("show");
		    },
			success: function (data) {
			$("#modal-productsout .modal-content").html(data.html_form);
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
			    $("#productsout-table tbody").html(data.html_productsout_list);
			    $("#modal-productsout").modal("hide");

			}
			else {
			    $("#modal-productsout .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create productsout
	$(".js-create-productsout").click(loadForm);
	$("#modal-productsout").on("submit", ".js-productsout-create-form", saveForm);

	// Update productsout
	$("#productsout-table").on("click", ".js-update-productsout", loadForm);
	$("#modal-productsout").on("submit", ".js-productsout-update-form", saveForm);

	// Delete productsout
	$("#productsout-table").on("click", ".js-delete-productsout", loadForm);
	$("#modal-productsout").on("submit", ".js-productsout-delete-form", saveForm);


    });