// --------------------------------- //
//  EASY AJAX VERSION 02 - ZOYA      //
//                                   //
//  Author: Cet500                   //
//  Date:   18.02.2020               //
// --------------------------------- //

window.onload = function() {
	console.log("Start EasyAjax [ver 02]...");

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
