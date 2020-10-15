// получение id пары и отправка на сервер через ajax-запрос

$('#ajax_find_cons').on('click', function() {
	para = $(this).prev().val();

	$.ajax({
		url     : '/php/ajax/ajax_cons.php',
		type    : 'POST',
		data    : { idp: para },
		success : function( html ) {
			$('#ajax_get_cons').html(html)
		}
	});
});