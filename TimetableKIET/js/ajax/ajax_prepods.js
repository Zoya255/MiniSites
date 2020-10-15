// получение id преподавателя и отправка на сервер через ajax-запрос

$('#ajax_find_prepod').on('click', function() {
	prepods = $(this).prev().val();

	$.ajax({
		url     : '/php/ajax/ajax_prepods.php',
		type    : 'POST',
		data    : { idp: prepods },
		success : function( html ) {
			$('#ajax_get_prepod').html(html)
		}
	});
});