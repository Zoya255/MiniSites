$("#form").submit(function(e){
	e.preventDefault();
	$.post('module_easy-ajax/php/ajax.php', $(this).serialize(), function(data){
		console.log(data)
	});
})

// $.ajax({
// 	type: "POST",
// 	url : "module_easy-ajax/php/ajax.php",
// 	data: array.serialize()
// });
