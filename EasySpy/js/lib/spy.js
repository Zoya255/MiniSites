class Spy {

	constructor (bool_log, bool_write){
		this.bool_log   = bool_log;
		this.bool_write = bool_write;
	}

	log (message) {
		if (this.bool_log == true){
			console.log(message);
		}
	}

	write (message, level = "info") {
		var date = new Date().toLocaleString()

		if (this.bool_write == true){
			if ( ( message == "" ) || ( message == null ) || ( message == "undefined" ) ) {
				message = "NULL";
			}

			if ( level == "debug" ){
				$("body").append(`<p class='debug'>${date} | ${message}</p>`);
			}
			else if ( level == "info" ){
				$("body").append(`<p class='info'>${date} | ${message}</p>`);
			}
			else if ( level == "warn" ){
				$("body").append(`<p class='warn'>${date} | ${message}</p>`);
			}
			else if ( level == "error" ){
				$("body").append(`<p class='error'>${date} | ${message}</p>`);
			}
		}
		else{
			console.error("боба")
		}
	}

	dump () {
		this.write(navigator.userAgent, "debug")

		var user = detect.parse(navigator.userAgent);
		
		this.write(user.browser.family)
		this.write(user.browser.name)
		this.write(user.browser.version)
		this.write(" ")
		this.write(user.device.type)
		this.write(user.device.family)
		this.write(user.device.name)
		this.write(user.device.manufacturer)
		this.write(" ")
		this.write(user.os.family)
		this.write(user.os.name)
		this.write(user.os.version)
		this.write(" ")
		this.write(navigator.platform)
	}

}