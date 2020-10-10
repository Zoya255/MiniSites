/*------------ Глобальные значения ------------*/

var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');

canv.width = 1920;
canv.height = 780;

var colorDR = localStorage.getItem('colorDRLS');
var widthDR = localStorage.getItem('widthDRLS');

/* Значения по умолчанию */
if (colorDR == null){
	localStorage.setItem('colorDRLS', '#000000');
	colorDR = localStorage.getItem('colorDRLS');
}
if (widthDR == null){
	localStorage.setItem('widthDRLS', '20');
	widthDR = localStorage.getItem('widthDRLS');
}

/*--------------- Блок рисования ---------------*/

var isMouseDown = false;
var coords = [];

canv.addEventListener('mousedown', function(){
	isMouseDown = true;
});

canv.addEventListener('mouseup', function(){
	isMouseDown = false;
	ctx.beginPath();
	coords.push('mouseup');
});

canv.addEventListener('mousemove', function(e){
	if (isMouseDown) {
		ctx.fillStyle = colorDR;
		ctx.strokeStyle = colorDR;
		ctx.lineWidth = widthDR;

		coords.push([e.clientX, e.clientY-60, colorDR, widthDR]);

		ctx.lineTo(e.clientX, e.clientY-60);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY-60, widthDR / 2, 0, Math.PI * 2);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY-60);
	}
});

/*-------- Прослушка кнопок на нажатие --------*/

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

var saveButton = document.getElementById('save');
saveButton.addEventListener('click', save);

var repeatButton = document.getElementById('repeat');
repeatButton.addEventListener('click', repeat);

/*------------------- Функции для рисование -------------------*/

function clear() {
	/* Функция очистки холста и массива */
	ctx.clearRect(0, 0, canv.width, canv.height);
	coords = [];
}

function save() {
	/* Функция сохранения */
	localStorage.setItem('coordsLS', JSON.stringify(coords));
}

function repeat() {
	/* Функция восстановления из сохранения */
	clear();

	var coordsR = JSON.parse(localStorage.getItem('coordsLS'));

	let timer = setInterval(function() {
		if (!coordsR.length) {
			clearInterval(timer);
			ctx.beginPath;
			return;
		}

		let crd = coordsR.shift();
		let e = {clientX: crd['0'], clientY: crd['1'], colorDR: crd['2'], widthDR: crd['3']};

		ctx.fillStyle = e.colorDR;
		ctx.strokeStyle = e.colorDR;
		ctx.lineWidth = e.widthDR;

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.clientX, e.clientY, e.widthDR / 2, 0, Math.PI * 2);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}, 1)
}

function pallete_color(color) {
	localStorage.setItem('colorDRLS', color);
	colorDR = color
}