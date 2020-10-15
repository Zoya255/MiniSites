// получение id группы и отправка на сервер через ajax-запрос

$('#ajax_find_group').on('click', function() {
	group = $(this).prev().val();

	$.ajax({
		url     : '/php/ajax/ajax_group.php',
		type    : 'POST',
		data    : { idg: group },
		success : function( html ) {
			$('#ajax_get_group').html(html)
		}
	});
});