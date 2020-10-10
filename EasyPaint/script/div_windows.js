/*-------- Прослушка кнопок на нажатие --------*/

var drcolorButton = document.getElementById('config');
drcolorButton.addEventListener('click', main_gen);
/*------------ Функции генерации окон меню ------------*/

function main_gen() {
	/* Функция для создания собственно окна */
	$('#generate').html('<div id="fon_window"></div><div id="window"><div id="header_window"><h2>Настройки Paint</h2><button id="close">X</button></div><div id="body_window"><fieldset id="f1"><legend>Настройка линии</legend><label>Цвет&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="f1_inp1" type="text"></label><br><label>Толщина <input id="f1_inp2" type="text"></label></fieldset><fieldset id="f2"><legend>Настройка фона</legend><label>Цвет&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="f2_inp1" type="text"></label></fieldset></div><div id="footer_window"><button id="save_win">сохранить</button></div></div>');

	var clearButton = document.getElementById('close');
	clearButton.addEventListener('click', delete_menu);

	var saveButton = document.getElementById('save_win');
	saveButton.addEventListener('click', save_menu);
}

function save_menu() {
	let colorDRPR;
	let	widthDRPR;
	let colorBGPR;

	colorDRPR = document.getElementById('f1_inp1').value;
	widthDRPR = document.getElementById('f1_inp2').value;
	colorBGPR = document.getElementById('f2_inp1').value;

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
		ctxf.fillStyle = colorBGPR;
		ctxf.fillRect(0, 0, bg.width, bg.width);
	}

	delete_menu();
}

function delete_menu() {
	/* Функция для закрытия окна */
	$('#fon_window').remove();
	$('#window').remove();
}