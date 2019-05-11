$(function () {

	/* Functions */

	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-piin").modal("show");
		    },
			success: function (data) {
			$("#modal-piin .modal-content").html(data.html_form);
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
			    $("#piin-table tbody").html(data.html_piin_list);
			    $("#modal-piin").modal("hide");
			}
			else {
			    $("#modal-piin .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create 
	$(".js-create-piin").click(loadForm);
	$("#modal-piin").on("submit", ".js-piin-create-form", saveForm);

	// Update 
	$("#piin-table").on("click", ".js-update-piin", loadForm);
	$("#modal-piin").on("submit", ".js-piin-update-form", saveForm);
	
	// Delete 
	$("#piin-table").on("click", ".js-delete-piin", loadForm);
	$("#modal-piin").on("submit", ".js-piin-delete-form", saveForm);

    });