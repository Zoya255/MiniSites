/*------------ Глобальные значения ------------*/

var bg = document.getElementById('BG');
var ctxf = bg.getContext('2d');

bg.width = 1920;
bg.height = 780;

var colorBG = localStorage.getItem('colorBGLS');

if (colorBG == null){
	localStorage.setItem('colorBGLS', '#ffffff');
	colorBG = localStorage.getItem('colorBGLS');
}
	
//установка фона сразу после перезагрузки страницы
ctxf.fillStyle = colorBG;
ctxf.fillRect(0, 0, bg.width, bg.width);