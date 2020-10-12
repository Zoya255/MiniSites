/* ------------------------------- paint ------------------------------- */

/* -------------------- initialization data -------------------- */

var data = {
	log__weight: 11,
	log__level: get_level(11),
	layers: 5,
	canvas__id_pr: 'script__canvas-paint-1',
	canvas__id_bg: 'script__canvas-background',
	color__bg: get_ls('colorBGLS'),
	color__pr: get_ls('colorDRLS'),
	width__pr: get_ls('widthDRLS'),
};

console.log('  Start ' + data.log__level + ' log');
console.log('--------------------------------');
console.log('');
console.log('Initialization of data:');
console.log('  | Level log: ' + data.log__level);
console.log('  | Weight log: ' + data.log__weight)
console.log('  | ID top canvas: ' + data.canvas__id_pr);
console.log('  | ID back canvas: ' + data.canvas__id_bg);
console.log('  | Number layers: ' + data.layers);
console.log('');

check_config();

update_config('Initialization');

/* -------------------- canvas background -------------------- */

var canvas__bg = document.getElementById(data.canvas__id_bg);
var ctx__bg = canvas__bg.getContext('2d');

ctx__bg.fillStyle = data.color__bg;
ctx__bg.fillRect(0, 0, canvas__bg.width, canvas__bg.height);

console.log('Initialization background:');
console.log('  | Background width:  ' + canvas__bg.width + 'px');
console.log('  | Background height: ' + canvas__bg.height + 'px');
console.log('')

/* -------------------- canvas print -------------------- */

var canvas__pr = document.getElementById(data.canvas__id_pr);
var ctx__pr    = document.getElementById(data.canvas__id_pr).getContext('2d');

canvas__pr.width  = $('#' + data.canvas__id_pr).width();
canvas__pr.height = $('#' + data.canvas__id_pr).height();

console.log('  | Paint width:  ' + canvas__pr.width + 'px');
console.log('  | Paint height: ' + canvas__pr.height + 'px');
console.log('');


var isMouseDown = false;
var coords = [];

canvas__pr.addEventListener('mousedown', function(){
	isMouseDown = true;

	if (data.log__weight <= 10) {
		console.log('Paint:');
	}
});

canvas__pr.addEventListener('mouseup', function(){
	isMouseDown = false;
	ctx__pr.beginPath();
	coords.push('mouseup');

	if (data.log__weight <= 10) {
		console.log('');
	}
});

canvas__pr.addEventListener('mousemove', function(e){
	var offset = $('.global__header').height() - window.pageYOffset;

	if (isMouseDown) {
		ctx__pr.fillStyle   = data.color__pr;
		ctx__pr.strokeStyle = data.color__pr;
		ctx__pr.lineWidth   = data.width__pr;

		coords.push([e.clientX, e.clientY - offset, data.color__pr, data.width__pr]);

		ctx__pr.lineTo(e.clientX, e.clientY - offset);
		ctx__pr.stroke();

		ctx__pr.beginPath();
		ctx__pr.arc(e.clientX, e.clientY - offset, data.width__pr / 2, 0, Math.PI * 2);
		ctx__pr.fill();

		ctx__pr.beginPath();
		ctx__pr.moveTo(e.clientX, e.clientY - offset);

		if (data.log__weight <= 10) {
			console.log('  | ' + e.clientX + ' ' + (e.clientY - offset) + ' ' + data.color__pr + ' ' + data.width__pr);
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
	let color_pr_check = $('#f1_inp1').val();
	let	width_pr_check = $('#f1_inp2').val();
	let color_bg_check = $('#f2_inp1').val();

	if ((color_pr_check !== null) && (color_pr_check !== undefined) && (color_pr_check !== "")) {
		set_ls('colorDRLS', color_pr_check);
		data.color__pr = color_pr_check;
	}

	if ((width_pr_check !== null) && (width_pr_check !== undefined) && (width_pr_check !== "")){
		set_ls('widthDRLS', width_pr_check);
		data.width_pr = width_pr_check;
	}

	if ((color_bg_check !== null) && (color_bg_check !== undefined) && (color_bg_check !== "")){
		set_ls('colorBGLS', color_bg_check);
		data.color__bg = color_bg_check;
		ctx__bg.fillStyle = color_bg_check;
		ctx__bg.fillRect(0, 0, canvas__bg.width, canvas__bg.height);
	}

	update_config();
}

/* -------------------- update config -------------------- */

function update_config(status = 'Update') {
	$('#f1_inp1').val( get_ls('colorDRLS') );
	$('#f1_inp2').val( get_ls('widthDRLS') );
	$('#f2_inp1').val( get_ls('colorBGLS') );

	console.log(status + ' config:');
	console.log('  | Color of line: ' + get_ls('colorDRLS'));
	console.log('  | Width of line: ' + get_ls('widthDRLS') + 'px');
	console.log('  | Color of background: ' + get_ls('colorBGLS'));
	console.log('');
}

/* -------------------- pallete color -------------------- */

function pallete_color(color) {
	set_ls('colorDRLS', color);
	data.color__pr = color;

	update_config();
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

	data.canvas__id_pr = id;
	ctx__pr = document.getElementById(data.canvas__id_pr).getContext('2d');

	console.log('Update layers:');
	console.log('  | Top layer:    ' + number)
	console.log('  | Top layer id: ' + data.canvas__id_pr);
	console.log('');
}

/* -------------------- check config -------------------- */

function check_config() {
	let check = 0;

	console.log('Check config...');

	if (data.color__bg == null){
		set_ls('colorBGLS', '#ffffff');
		data.color__bg = get_ls('colorBGLS');
		check++;
	}
	if (data.color__pr == null){
		set_ls('colorDRLS', '#000000');
		data.color__pr = get_ls('colorDRLS');
		check++;
	}
	if (data.width__pr == null){
		set_ls('widthDRLS', '20');
		data.color__pr = get_ls('widthDRLS');
		check++;
	}

	if (check == 0) {
		console.log('  | Status: OK');
	}
	else{
		console.log('  | Status: set ' + check + ' items');
	}

	console.log('');
}

/* -------------------- level of logs -------------------- */

function get_level(level) {
	if (level <= 10) {
		return 'Debug';
	}
	else if (level > 10) {
		return 'Info'
	}
}

/* -------------------- local storage -------------------- */

function set_ls(key, item) {
	localStorage.setItem(key, item);
}
function get_ls(key) {
	return localStorage.getItem(key);
}
