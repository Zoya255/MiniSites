// --------------------------------- //
//  EASY AJAX VERSION 01 - ELIZA     //
//                                   //
//  Author: Cet500                   //
//  Date:   27.01.2020               //
// --------------------------------- //

window.onload = function() {
	include("module_easy-ajax/js/external/jquery-3.5.1.min.js");
	include("module_easy-ajax/js/ajax.js");
}

function include(url) {
	let script = document.createElement('script');
	script.src = url;
	script.async = false;
	document.getElementsByTagName('head')[0].appendChild(script);
}
