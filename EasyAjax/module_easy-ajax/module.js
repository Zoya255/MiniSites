// --------------------------------- //
//  EASY AJAX VERSION 01 - ELIZA     //
//                                   //
//  Author: Cet500                   //
//  Date:   28.01.2020               //
// --------------------------------- //

window.onload = function() {
	console.log("Start EasyAjax [ver 01]...");

	include("module_easy-ajax/js/external/jquery-3.5.1.min.js");
	include("module_easy-ajax/js/min/lib.min.js");
	include("module_easy-ajax/js/min/ajax.min.js");
}

function include(url) {
	let script = document.createElement('script');
	script.src = url;
	script.async = false;
	document.getElementsByTagName('head')[0].appendChild(script);
}
