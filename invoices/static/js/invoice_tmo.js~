$(function () {
	/* Functions */
	var loadForm = function () {
	    var btn = $(this);
	    $.ajax({
		    url: btn.attr("data-url"),
			type: 'get',
			dataType: 'json',
			beforeSend: function () {
			$("#modal-tm").modal("show");
		    },
			success: function (data) {
			$("#modal-tm .modal-content").html(data.html_form);
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
			    $("#tm-table tbody").html(data.html_tm_list);
			    $("#modal-tm").modal("hide");
			}
			else {
			    $("#modal-tm .modal-content").html(data.html_form);
			}
		    }
		});
	    return false;
	};


	/* Binding */

	// Create 
	$(".js-create-tm").click(loadForm);
	$("#modal-tm").on("submit", ".js-tm-create-form", saveForm);

	// Update
        $("#tm-table").on("click", ".js-update-tm", loadForm);
        $("#modal-tm").on("submit", ".js-tm-update-form", saveForm);
	
	// Delete
        $("#tm-table").on("click", ".js-delete-tm", loadForm);
        $("#modal-tm").on("submit", ".js-tm-delete-form", saveForm);

    });