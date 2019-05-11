$(function () {
	/* Functions */
	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-tmo").modal("show");
		    },
			success: function (data) {
			$("#modal-tmo .modal-content").html(data.html_form);
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
			    $("#tmo-table tbody").html(data.html_tmo_list);
			    $("#modal-tmo").modal("hide");
			}
			else {
			    $("#modal-tmo .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create 
	$(".js-create-tmo").click(loadForm);
	$("#modal-tmo").on("submit", ".js-tmo-create-form", saveForm);

	// Update
        $("#tmo-table").on("click", ".js-update-tmo", loadForm);
        $("#modal-tmo").on("submit", ".js-tmo-update-form", saveForm);
	
	// Delete
        $("#tmo-table").on("click", ".js-delete-tmo", loadForm);
        $("#modal-tmo").on("submit", ".js-tmo-delete-form", saveForm);

    });