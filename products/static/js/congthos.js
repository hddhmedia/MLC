$(function () {

	/* Functions */

	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-congtho").modal("show");
		    },
			success: function (data) {
			$("#modal-congtho .modal-content").html(data.html_form);
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
			    $("#congtho-table tbody").html(data.html_congtho_list);
			    $("#modal-congtho").modal("hide");
			}
			else {
			    $("#modal-congtho .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create productsout
	$(".js-create-congtho").click(loadForm);
	$("#modal-congtho").on("submit", ".js-congtho-create-form", saveForm);

	// Update productsout
	$("#congtho-table").on("click", ".js-update-congtho", loadForm);
	$("#modal-congtho").on("submit", ".js-congtho-update-form", saveForm);

	// Delete productsout
	$("#congtho-table").on("click", ".js-delete-congtho", loadForm);
	$("#modal-congtho").on("submit", ".js-congtho-delete-form", saveForm);

    });