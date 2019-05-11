$(function () {

	/* Functions */

	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-productsin").modal("show");
		    },
			success: function (data) {
			$("#modal-productsin .modal-content").html(data.html_form);
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
			    $("#productsin-table tbody").html(data.html_productsin_list);
			    $("#modal-productsin").modal("hide");
			}
			else {
			    $("#modal-productsin .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create productsin
	$(".js-create-productsin").click(loadForm);
	$("#modal-productsin").on("submit", ".js-productsin-create-form", saveForm);

	// Update productsin
	$("#productsin-table").on("click", ".js-update-productsin", loadForm);
	$("#modal-productsin").on("submit", ".js-productsin-update-form", saveForm);

	// Delete productsin
	$("#productsin-table").on("click", ".js-delete-productsin", loadForm);
	$("#modal-productsin").on("submit", ".js-productsin-delete-form", saveForm);

    });