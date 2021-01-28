function printer (message, level = "info", multiline = false) {
	let date = new Date().toLocaleString()
	let delimiter = ""

	if (multiline) {
		delimiter = "<br>"
	}
	else {
		delimiter = " | "
	}

	if ( level === "debug" ){
		$("body").append(`<p class='debug'>${date}${delimiter}${message}</p>`);
	}
	else if ( level === "info" ){
		$("body").append(`<p class='info'>${date}${delimiter}${message}</p>`);
	}
	else if ( level === "success" ){
		$("body").append(`<p class='success'>${date}${delimiter}${message}</p>`);
	}
	else if ( level === "warn" ){
		$("body").append(`<p class='warn'>${date}${delimiter}${message}</p>`);
	}
	else if ( level === "error" ){
		$("body").append(`<p class='error'>${date}${delimiter}${message}</p>`);
	}
}
