$(function () {

	/* Functions */

	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-ct").modal("show");
		    },
			success: function (data) {
			$("#modal-ct .modal-content").html(data.html_form);
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
			    $("#ct-table tbody").html(data.html_ct_list);
			    $("#modal-ct").modal("hide");
			}
			else {
			    $("#modal-ct .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create 
	$(".js-create-ct").click(loadForm);
	$("#modal-ct").on("submit", ".js-ct-create-form", saveForm);

	// Update 
	$("#ct-table").on("click", ".js-update-ct", loadForm);
	$("#modal-ct").on("submit", ".js-ct-update-form", saveForm);
	
	// Delete 
	$("#ct-table").on("click", ".js-delete-ct", loadForm);
	$("#modal-ct").on("submit", ".js-ct-delete-form", saveForm);

    });