class Spy {

	constructor (bool_log = false, bool_write = false){
		this.bool_log   = bool_log;
		this.bool_write = bool_write;
	}


	log (message, level = "info") {
		if (this.bool_log === true){
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


	write (message, level = "info") {
		let date = new Date().toLocaleString()

		if (this.bool_write === true){
			if ( level === "debug" ){
				$("body").append(`<p class='debug'>${date} | ${message}</p>`);
			}
			else if ( level === "info" ){
				$("body").append(`<p class='info'>${date} | ${message}</p>`);
			}
			else if ( level === "warn" ){
				$("body").append(`<p class='warn'>${date} | ${message}</p>`);
			}
			else if ( level === "error" ){
				$("body").append(`<p class='error'>${date} | ${message}</p>`);
			}
		}
		else{
			console.error("боба")
		}
	}


	data (arr_bool = true) {
		let user = detect.parse(navigator.userAgent)
		const screenWidth = window.screen.width
		const screenHeight = window.screen.height
		const screenDepth = window.screen.pixelDepth

		if (arr_bool === true) {
			let array = [
				user.browser.family,
				user.browser.name,
				user.browser.version,
				user.device.type,
				user.device.family,
				user.device.name,
				user.device.manufacturer,
				user.os.family,
				user.os.name,
				user.os.version,
				navigator.platform,
				screenWidth,
				screenHeight,
				screenDepth
			];

			let array_clear = [];

			for (let i = 0; i < array.length; i++) {
				array_clear[i] = this.check(array[i]);
			}

			return array_clear;
		}
		else{
			let array = {
				browser_family      : user.browser.family,
				browser_name        : user.browser.name,
				browser_version     : user.browser.version,
				device_type         : user.device.type,
				device_family       : user.device.family,
				device_name         : user.device.name,
				device_manufacturer : user.device.manufacturer,
				os_family           : user.os.family,
				os_name             : user.os.name,
				os_version          : user.os.version,
				os_platform         : navigator.platform,
				screen_width        : screenWidth,
				screen_height       : screenHeight,
				screen_depth        : screenDepth
			}

			let array_clear = [];

			for(let arr in array) {
				array_clear[arr] = this.check(array[arr])
			}

			return array_clear;
		}
	}


	ajax () {
		let user           = detect.parse(navigator.userAgent)
		const screenWidth  = window.screen.width
		const screenHeight = window.screen.height
		const screenDepth  = window.screen.pixelDepth
		const is_log       = this.bool_log

		$.ajax({
			method   : "POST",
			url      : "module_easy-spy/php/handle.php",
			data     : {
				browser_family      : this.check(user.browser.family),
				browser_name        : this.check(user.browser.name),
				browser_version     : this.check(user.browser.version),
				device_type         : this.check(user.device.type),
				device_family       : this.check(user.device.family),
				device_name         : this.check(user.device.name),
				device_manufacturer : this.check(user.device.manufacturer),
				os_family           : this.check(user.os.family),
				os_name             : this.check(user.os.name),
				os_version          : this.check(user.os.version),
				os_platform         : this.check(navigator.platform),
				screen_width        : this.check(screenWidth),
				screen_height       : this.check(screenHeight),
				screen_depth        : this.check(screenDepth)
			},
			success  : function (data, textStatus) {
				if (is_log === true) {
					console.log(textStatus)
				}
			},
			error    : function (jqXHR, textStatus) {
				if (is_log === true) {
					console.error(textStatus)
				}
			},
		});
	}


	dump_print () {
		let data = this.data(true)

		for (let i = 0; i < data.length; i++) {
			this.write(data[i], "info");
		}
	}


	dump_log() {
		let data = this.data(true)

		for (let i = 0; i < data.length; i++) {
			this.log(data[i]);
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