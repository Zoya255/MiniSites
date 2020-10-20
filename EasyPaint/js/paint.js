/* ------------------------------- paint ------------------------------- */

/* -------------------- initialization data -------------------- */

var data = {
	log__weight: 10,
	log__level: get_level(10),
	layers: 5,
	layer__id: 1,
	canvas__id_pr: 'script__canvas-paint-',
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
console.log('  | ID top canvas: ' + data.canvas__id_pr + data.layer__id);
console.log('  | ID back canvas: ' + data.canvas__id_bg);
console.log('  | Number layers: ' + data.layers);
console.log('');

check_config();

update_config('Initialization');

/* -------------------- initialization background -------------------- */

var canvas__bg = document.getElementById(data.canvas__id_bg);
var ctx__bg = canvas__bg.getContext('2d');

ctx__bg.fillStyle = data.color__bg;
ctx__bg.fillRect(0, 0, canvas__bg.width, canvas__bg.height);

console.log('Initialization background:');
console.log('  | Background width:  ' + canvas__bg.width + 'px');
console.log('  | Background height: ' + canvas__bg.height + 'px');
console.log('')

/* -------------------- initialization layers -------------------- */

var canvas__pr = document.getElementById(data.canvas__id_pr + data.layer__id);
var ctx__pr    = document.getElementById(data.canvas__id_pr + data.layer__id).getContext('2d');

console.log('Initialization background:');

for (var i = 1; i <= data.layers; i++) {
	canvas__pr = document.getElementById(data.canvas__id_pr + i);

	canvas__pr.width  = $('#' + data.canvas__id_pr + i).width();
	canvas__pr.height = $('#' + data.canvas__id_pr + i).height();

	console.log('  | Layer ' + i + ' width:  ' + canvas__pr.width + 'px');
	console.log('  | Layer ' + i + ' height: ' + canvas__pr.height + 'px');
}

console.log('');

/* -------------------- canvas print -------------------- */

canvas__pr = document.getElementById(data.canvas__id_pr + data.layer__id);
ctx__pr    = document.getElementById(data.canvas__id_pr + data.layer__id).getContext('2d');

var isMouseDown = false;
var coords = [];

canvas__pr.addEventListener('mousedown', function(){
	isMouseDown = true;

	log_debug('Paint:');
});

canvas__pr.addEventListener('mouseup', function(){
	isMouseDown = false;
	ctx__pr.beginPath();
	coords.push('mouseup');

	log_debug('');
});

canvas__pr.addEventListener('mousemove', function(e){
	var offset = $('.global__header').height() - window.pageYOffset;

	if (isMouseDown) {
		ctx__pr.fillStyle   = data.color__pr;
		ctx__pr.strokeStyle = data.color__pr;
		ctx__pr.lineWidth   = data.width__pr;

		coords.push([e.clientX, e.clientY - offset, data.layer__id, data.color__pr, data.width__pr]);

		ctx__pr.lineTo(e.clientX, e.clientY - offset);
		ctx__pr.stroke();

		ctx__pr.beginPath();
		ctx__pr.arc(e.clientX, e.clientY - offset, data.width__pr / 2, 0, Math.PI * 2);
		ctx__pr.fill();

		ctx__pr.beginPath();
		ctx__pr.moveTo(e.clientX, e.clientY - offset);

		log_debug('  | ' + e.clientX + ' ' + (e.clientY - offset) + ' ' + data.layer__id + ' ' + data.color__pr + ' ' + data.width__pr);
	}
});

/* -------------------- save -------------------- */

$("#script__button-save").click(function() { save() });

function save() {
	set_ls('coordsLS', JSON.stringify(coords));

	console.log('Save of picture');
	console.log('');
}

/* -------------------- repeat -------------------- */

$("#script__button-repeat").click(function() { repeat() });

function repeat() {
	clear();

	var coordsR = JSON.parse(localStorage.getItem('coordsLS'));

	var tempLayerID = data.layer__id;

	let timer = setInterval(function() {
		if (!coordsR.length) {
			clearInterval(timer);
			ctx__pr.beginPath;
			return;
		}

		let crd = coordsR.shift();
		let e = {clientX: crd['0'], clientY: crd['1'], layerID: crd['2'], colorDR: crd['3'], widthDR: crd['4']};


		if ( tempLayerID !== e.layerID ) {
			ctx__pr.beginPath();
			ctx__pr     = document.getElementById(data.canvas__id_pr + e.layerID).getContext('2d');
			tempLayerID = e.layerID;
		}

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
	}, 5);

	console.log('Repaint of picture');
	console.log('');
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
	console.log('Clear all layers:');

	for (var i = 1; i <= data.layers; i++) {
		ctx__pr    = document.getElementById(data.canvas__id_pr + i).getContext('2d');

		ctx__pr.clearRect(0, 0, canvas__pr.width, canvas__pr.height);

		console.log('  | Clear layer ' + i)
	}
	
	ctx__pr    = document.getElementById(data.canvas__id_pr + data.layer__id).getContext('2d');

	coords = [];

	console.log('  | Clear array of coords')
	console.log('');
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
		data.width__pr = width_pr_check;
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

	data.layer__id = number;
	canvas__pr = document.getElementById(data.canvas__id_pr + data.layer__id);
	ctx__pr    = document.getElementById(data.canvas__id_pr + data.layer__id).getContext('2d');

	console.log('Update layers:');
	console.log('  | Top layer:    ' + number)
	console.log('  | Top layer id: ' + data.canvas__id_pr + data.layer__id);
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

function log_debug(message) {
	if (data.log__weight <= 10) {
		console.log(message);
	}
}

function log_info(message) {
	if (data.log__weight > 10) {
		console.log(message);
	}
}

/* -------------------- local storage -------------------- */

function set_ls(key, item) {
	localStorage.setItem(key, item);

	log_debug('Saving data in Local Storage:');
	log_debug('  | key:  ' + key);
	log_debug('  | item: ' + item);
	log_debug('');
}

function get_ls(key) {
	return localStorage.getItem(key);

	log_debug('Loading data from Local Storage:');
	log_debug('  | key: ' + key);
	log_debug('');
}

/* -------------------- add user color -------------------- */

$('#script__button-add-color').click(function() { add_user_color() });

function add_user_color() {
	let inner = `
		<div class="global__aside-colors-content-color"
			 onclick="pallete_color('${data.color__pr}')"
			 style="background-color: ${data.color__pr};">
		</div>
	`;

	$(inner).appendTo('.global__aside-colors-content-user');

	console.log('Add user color in library:')
	console.log('  | Paint color: ' + data.color__pr);
	console.log('')
}

/* -------------------- import -------------------- */

$('#script__button-import').click(function() { import_data() })

function import_data() {
	set_ls('coordsLS', $('#script__data_import').val());
}

/* -------------------- export -------------------- */

$('#script__button-export').click(function() { export_data() })

function export_data() {
	$('#script__data_export').text(get_ls('coordsLS'))
}
