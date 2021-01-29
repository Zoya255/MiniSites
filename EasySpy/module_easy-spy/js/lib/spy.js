class Spy {

	constructor (bool_log = false, bool_write = false){
		this.bool_log   = bool_log;
		this.bool_write = bool_write;
	}


	log (message, level = "info") {
		if (this.bool_log){
			if ( level === "info" ) {
				console.log(message);
			}
			else if ( level === "warn" ) {
				console.warn(message)
			}
			else if ( level === "error" ) {
				console.error(message)
			}
		}
	}


	print (message, level = "info") {
		let date = new Date().toLocaleString()

		if (this.bool_write){
			if ( level === "debug" ){
				$("body").append(`<p class='debug'>${date} | ${message}</p>`);
			}
			else if ( level === "info" ){
				$("body").append(`<p class='info'>${date} | ${message}</p>`);
			}
			else if ( level === "success" ){
				$("body").append(`<p class='success'>${date} | ${message}</p>`);
			}
			else if ( level === "warn" ){
				$("body").append(`<p class='warn'>${date} | ${message}</p>`);
			}
			else if ( level === "error" ){
				$("body").append(`<p class='error'>${date} | ${message}</p>`);
			}
		}
	}


	check(item) {
		if ( ( item === "" ) || ( item == null ) || ( item === "undefined" ) ) {
			return 'NULL';
		}
		else {
			return item;
		}
	}

}
