$(".form").submit(function(e){
	e.preventDefault();
	$.post('module_easy-ajax/php/ajax.php', $(this).serialize(), function(data){
		printer(data, "success", true)
	});
})

// $.ajax({
// 	type: "POST",
// 	url : "module_easy-ajax/php/ajax.php",
// 	data: array.serialize()
// });
