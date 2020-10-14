"use strict"

/*--------------Локальное хранение выбранной темы--------------*/

if (localStorage.getItem("themeStyle") === "light") {
	setLightTheme();
}
else if (localStorage.getItem("themeStyle") === "bright") {
	setBrightTheme();
}
else if (localStorage.getItem("themeStyle") === "dark"){
	setDarkTheme();
}
else {}

/*--------------Функции--------------*/

function setLightTheme() {
	localStorage.setItem("themeStyle", "light");
	let x, ix;

	x = document.getElementsByTagName("body") [ 0 ];
	x.style.backgroundColor = "#d2d2d2";

	x = document.getElementsByTagName("p");
	for (ix = 0; ix < x.length; ix++) {
	x[ix].style.color = "#000000";
	}

	x = document.getElementsByTagName("h1") [ 0 ];
	x.style.color = "#000000";

	x = document.getElementsByTagName("h2") [ 0 ];
	x.style.color = "#000000";

	x = document.getElementsByTagName("h3");
	for (ix = 0; ix < x.length; ix++) {
	x[ix].style.color = "#000000";
	}

	x = document.getElementsByTagName("header") [ 0 ];
	x.style.backgroundColor = "#777777";

	x = document.getElementsByTagName("nav") [ 0 ];
	x.style.backgroundColor = "#adadad";

	x = document.getElementsByTagName("aside") [ 0 ];
	x.style.backgroundColor = "#adadad";

	x = document.getElementsByTagName("footer") [ 0 ];
	x.style.backgroundColor = "#777777";

	x = document.querySelectorAll(".metro a");
	for (ix = 0; ix < x.length; ix++) {
	x[ix].style.color = "#000000";
	}

	x = document.querySelectorAll(".metro a:before");
	for (ix = 0; ix < x.length; ix++) {
	x[ix].style.color = "#CA682D";
	}
	
}

function setBrightTheme() {
	localStorage.setItem("themeStyle", "bright");
	let y, iy;

	y = document.getElementsByTagName("body") [ 0 ];
	y.style.backgroundColor = "#fce0cc";

	y = document.getElementsByTagName("p");
	for (iy = 0; iy < y.length; iy++) {
	y[iy].style.color = "#000000";
	}

	y = document.getElementsByTagName("h1") [ 0 ];
	y.style.color = "#000000";

	y = document.getElementsByTagName("h2") [ 0 ];
	y.style.color = "#000000";

	y = document.getElementsByTagName("h3");
	for (iy = 0; iy < y.length; iy++) {
	y[iy].style.color = "#000000";
	}

	y = document.getElementsByTagName("header") [ 0 ];
	y.style.backgroundColor = "#f39f18";

	y = document.getElementsByTagName("nav") [ 0 ];
	y.style.backgroundColor = "#ffc266";

	y = document.getElementsByTagName("aside") [ 0 ];
	y.style.backgroundColor = "#ffc266";

	y = document.getElementsByTagName("footer") [ 0 ];
	y.style.backgroundColor = "#f39f18";

	y = document.querySelectorAll(".metro a");
	for (iy = 0; iy < y.length; iy++) {
	y[iy].style.color = "#000000";
	}

	y = document.querySelectorAll(".metro a:before");
	for (iy = 0; iy < y.length; iy++) {
	y[iy].style.color = "#000000";
	}

}

function setDarkTheme() {
	localStorage.setItem("themeStyle", "dark");
	let z, iz;

	z = document.getElementsByTagName("body") [ 0 ];
	z.style.backgroundColor = "#222222";

	z = document.getElementsByTagName("p");
	for (iz = 0; iz < z.length; iz++) {
	z[iz].style.color = "#ffffff";
	}

	z = document.getElementsByTagName("h1") [ 0 ];
	z.style.color = "#ffffff";

	z = document.getElementsByTagName("h2") [ 0 ];
	z.style.color = "#ffffff";

	z = document.getElementsByTagName("h3");
	for (iz = 0; iz < z.length; iz++) {
	z[iz].style.color = "#ffffff";
	}

	z = document.getElementsByTagName("header") [ 0 ];
	z.style.backgroundColor = "#212121";

	z = document.getElementsByTagName("nav") [ 0 ];
	z.style.backgroundColor = "#383838";

	z = document.getElementsByTagName("aside") [ 0 ];
	z.style.backgroundColor = "#383838";

	z = document.getElementsByTagName("footer") [ 0 ];
	z.style.backgroundColor = "#212121";

	z = document.querySelectorAll(".metro a");
	for (iz = 0; iz < z.length; iz++) {
	z[iz].style.color = "#ffffff";
	}

	z = document.querySelectorAll(".metro a:before");
	for (iz = 0; iz < z.length; iz++) {
	z[iz].style.color = "#000000";
	}

}