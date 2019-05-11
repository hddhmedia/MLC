$(function () {

	/* Functions */

	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-po").modal("show");
		    },
			success: function (data) {
			$("#modal-po .modal-content").html(data.html_form);
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
			    $("#po-table tbody").html(data.html_po_list);
			    $("#modal-po").modal("hide");
			}
			else {
			    $("#modal-po .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create 
	$(".js-create-po").click(loadForm);
	$("#modal-po").on("submit", ".js-po-create-form", saveForm);

	// Update 
	$("#po-table").on("click", ".js-update-po", loadForm);
	$("#modal-po").on("submit", ".js-po-update-form", saveForm);
	
	// Delete 
	$("#po-table").on("click", ".js-delete-po", loadForm);
	$("#modal-po").on("submit", ".js-po-delete-form", saveForm);

    });