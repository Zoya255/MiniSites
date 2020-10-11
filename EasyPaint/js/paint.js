/* ------------------------------- paint ------------------------------- */

/* -------------------- initialization data -------------------- */

data = {};

data.levelLog = 'Debug';
data.levelLogNum  = '10';

var canvas__id = 'script__canvas-paint-1';

console.log('  Start ' + data.levelLog + ' log');
console.log('--------------------------------');
console.log('');
console.log('Dump of data:');
console.log('  | Level log: ' + data.levelLog + ' ( ' + data.levelLogNum + ' )');
console.log('  | ID canvas: ' + canvas__id);
console.log('');

/* -------------------- data -------------------- */

var locStr = localStorage;

var colorBG = locStr.getItem('colorBGLS');
var colorDR = locStr.getItem('colorDRLS');
var widthDR = locStr.getItem('widthDRLS');

if (colorBG == null){
	locStr.setItem('colorBGLS', '#ffffff');
	colorBG = locStr.getItem('colorBGLS');
}
if (colorDR == null){
	locStr.setItem('colorDRLS', '#000000');
	colorDR = locStr.getItem('colorDRLS');
}
if (widthDR == null){
	locStr.setItem('widthDRLS', '20');
	widthDR = locStr.getItem('widthDRLS');
}

update_panel();

/* -------------------- canvas background -------------------- */

var canvas__bg = document.getElementById('script__canvas-background');
var ctx__bg = canvas__bg.getContext('2d');

ctx__bg.fillStyle = colorBG;
ctx__bg.fillRect(0, 0, canvas__bg.width, canvas__bg.height);

console.log('Canvas initialization:');
console.log('  | Background width:  ' + canvas__bg.width + 'px');
console.log('  | Background height: ' + canvas__bg.height + 'px');

/* -------------------- canvas print -------------------- */

var canvas__pr = document.getElementById(canvas__id);
var ctx__pr    = document.getElementById(canvas__id).getContext('2d');

canvas__pr.width  = $(canvas__id).width();
canvas__pr.height = $(canvas__id).height();

console.log('  | Paint width:  ' + canvas__pr.width + 'px');
console.log('  | Paint height: ' + canvas__pr.height + 'px');
console.log('');


var isMouseDown = false;
var coords = [];

canvas__pr.addEventListener('mousedown', function(){
	isMouseDown = true;

	if (data.levelLogNum <= 10) {
		console.log('Paint:');
	}
});

canvas__pr.addEventListener('mouseup', function(){
	isMouseDown = false;
	ctx__pr.beginPath();
	coords.push('mouseup');

	if (data.levelLogNum <= 10) {
		console.log('');
	}
});

canvas__pr.addEventListener('mousemove', function(e){
	var offset = $('.global__header').height() - window.pageYOffset;

	if (isMouseDown) {
		ctx__pr.fillStyle = colorDR;
		ctx__pr.strokeStyle = colorDR;
		ctx__pr.lineWidth = widthDR;

		coords.push([e.clientX, e.clientY - offset, colorDR, widthDR]);

		ctx__pr.lineTo(e.clientX, e.clientY - offset);
		ctx__pr.stroke();

		ctx__pr.beginPath();
		ctx__pr.arc(e.clientX, e.clientY - offset, widthDR / 2, 0, Math.PI * 2);
		ctx__pr.fill();

		ctx__pr.beginPath();
		ctx__pr.moveTo(e.clientX, e.clientY - offset);

		if (data.levelLogNum <= 10) {
			console.log('  | ' + e.clientX + ' ' + (e.clientY - offset) + ' ' + colorDR + ' ' + widthDR);
		}
	}
});

/* -------------------- save -------------------- */

$("#script__button-save").click(function() { save() });

function save() {
	localStorage.setItem('coordsLS', JSON.stringify(coords));
}

/* -------------------- repeat -------------------- */

$("#script__button-repeat").click(function() { repeat() });

function repeat() {
	clear();

	var coordsR = JSON.parse(localStorage.getItem('coordsLS'));

	let timer = setInterval(function() {
		if (!coordsR.length) {
			clearInterval(timer);
			ctx__pr.beginPath;
			return;
		}

		let crd = coordsR.shift();
		let e = {clientX: crd['0'], clientY: crd['1'], colorDR: crd['2'], widthDR: crd['3']};

		ctx__pr.fillStyle = e.colorDR;
		ctx__pr.strokeStyle = e.colorDR;
		ctx__pr.lineWidth = e.widthDR;

		ctx__pr.lineTo(e.clientX, e.clientY);
		ctx__pr.stroke();

		ctx__pr.beginPath();
		ctx__pr.arc(e.clientX, e.clientY, e.widthDR / 2, 0, Math.PI * 2);
		ctx__pr.fill();

		ctx__pr.beginPath();
		ctx__pr.moveTo(e.clientX, e.clientY);
	}, 1)
}

/* -------------------- aside -------------------- */

$("#script__button-aside-toggle").click(function() { aside_toggle() });

function aside_toggle() {
	$('.global__aside').toggle(
		function(){
			$("div.slide_panel").animate( {left:'201px'}, 500);
		}, 
		function() {
			$("div.slide_panel").animate( {left:0}, 500);
		}
	);

	console.log('Toggle of aside');
	console.log('');
}

/* -------------------- clear -------------------- */

$("#script__button-clear").click(function() { clear() });

function clear() {
	ctx__pr.clearRect(0, 0, canvas__pr.width, canvas__pr.height);
	coords = [];
}

/* -------------------- config colors -------------------- */

$("#script__button-save-config").click(function() { save_config() });

function save_config() {
	let colorDRPR;
	let	widthDRPR;
	let colorBGPR;

	colorDRPR = $('#f1_inp1').val();
	widthDRPR = $('#f1_inp2').val();
	colorBGPR = $('#f2_inp1').val();

	if ((colorDRPR !== null) && (colorDRPR !== undefined) && (colorDRPR !== "")) {
		localStorage.setItem('colorDRLS', colorDRPR);
		colorDR = colorDRPR;
	}

	if ((widthDRPR !== null) && (widthDRPR !== undefined) && (widthDRPR !== "")){
		localStorage.setItem('widthDRLS', widthDRPR);
		widthDR = widthDRPR;
	}

	if ((colorBGPR !== null) && (colorBGPR !== undefined) && (colorBGPR !== "")){
		localStorage.setItem('colorBGLS', colorBGPR);
		colorBG = colorBGPR;
		ctx__bg.fillStyle = colorBGPR;
		ctx__bg.fillRect(0, 0, canvas__bg.width, canvas__bg.height);
	}

	update_panel();
}

/* -------------------- update panel -------------------- */

function update_panel() {
	var LS = localStorage;

	$('#f1_inp1').val( LS.getItem('colorDRLS') );
	$('#f1_inp2').val( LS.getItem('widthDRLS') );
	$('#f2_inp1').val( LS.getItem('colorBGLS') );

	console.log('Update config:');
	console.log('  | Color of line: ' + LS.getItem('colorDRLS'));
	console.log('  | Width of line: ' + LS.getItem('widthDRLS') + 'px');
	console.log('  | Color of background: ' + LS.getItem('colorBGLS'));
	console.log('');
}

/* -------------------- pallete color -------------------- */

function pallete_color(color) {
	localStorage.setItem('colorDRLS', color);
	colorDR = color;

	update_panel();
}

/* -------------------- layers -------------------- */

$(".script__button-top").click(function() { set_top_layer(this) });

function set_top_layer(el) {
	$('.global__aside-layers-content-layer-top').removeClass('global__aside-layers-content-layer-top');
	$(el).parent().addClass('global__aside-layers-content-layer-top');

	$('.fa-paint-roller').removeClass('fa-paint-roller').addClass('fa-arrow-up');
	$(el).children().removeClass('fa-arrow-up').addClass('fa-paint-roller');

	var number = $(el).parent().index() + 1; 

	$('.script__canvas-top').removeClass('script__canvas-top');

	var id = 'script__canvas-paint-' + number;

	$('#' + id).addClass('script__canvas-top')

	canvas__id = id;
	ctx__pr = document.getElementById(canvas__id).getContext('2d');

	console.log('Update layers:');
	console.log('  | Top layer:    ' + number)
	console.log('  | Top layer id: ' + canvas__id);
	console.log('');
}
