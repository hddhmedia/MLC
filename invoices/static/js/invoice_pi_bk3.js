$(function () {

	$(".js-create-piin").click(function () {
		var btn=$(this);
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
	    });

    });

$("#modal-piin").on("submit", ".js-piin-create-form", function () {
	var form = $(this);
	$.ajax({
		url: form.attr("action"),
		    data: form.serialize(),
		    type: form.attr("method"),
		    dataType: 'json',
		    success: function (data) {
		    if (data.form_is_valid) {
			$("#piin-table tbody").html(data.html_piin_list);  // <-- Replace the table body
			$("#modal-piin").modal("hide");  // <-- Close the modal
		    }
		    else {
			$("#modal-piin .modal-content").html(data.html_form);
		    }
		}
	    });
	return false;
	});


