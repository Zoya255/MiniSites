	//Массив вопросов и ответа
	var data_array = [
	  ["Код HTML состоит из...","команд","тегов","функций","кусков кода",2],
	  ["Самый первый тег любого сайта это...","&lt;html&gt;","&lt;head&gt;","&lt;title&gt;","&lt;body&gt;",1],
	  ["Тег, содержащий информацию о Web-странице","&lt;html&gt;","&lt;head&gt;","&lt;title&gt;","&lt;body&gt;",2],
	  ["Тег, содержащий элементы Web-страницы","&lt;html&gt;","&lt;head&gt;","&lt;title&gt;","&lt;body&gt;",4],
	  ["Выбери заголовок 1 уровня","&lt;h1&gt;Заголовок&lt;/h1&gt;","&lt;h2&gt;Заголовок&lt;/h2&gt;","&lt;h3&gt;Заголовок&lt;/h3&gt;","&lt;h4&gt;&lt;/h4&gt;",1],
	  ["Выбери тег абцаза","&lt;p&gt;абзац&lt;/p&gt;","&lt;h1&gt;абзац&lt;/h1&gt;","&lt;em&gt;абзац&lt;/em&gt;","&lt;u&gt;абзац&lt;/u&gt;",1],
	  ["Выбери тег жирного шрифта","&lt;strong&gt;текст&lt;/strong&gt;","&lt;p&gt;текст&lt;/p&gt;","&lt;em&gt;текст&lt;/em&gt;","&lt;strike&gt;текст&lt;/strike&gt;",1],
	];

	var plus = 0;
	var time = 0;
	var cur_answer = 0;
	var count_answer = data_array.length;
	
	function sec() {
		time++;	
		document.getElementById('time').innerHTML='Затрачено времени: ' + time + ' сек';
	}
	
	function check(num){

		if(num == 0){ 
		
			document.getElementById('option1').style.display='block';
			document.getElementById('option2').style.display='block';
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			document.getElementById('question').style.display='block';

			document.getElementById('option1').innerHTML=data_array[cur_answer][1];
			document.getElementById('option2').innerHTML=data_array[cur_answer][2];
			document.getElementById('option3').innerHTML=data_array[cur_answer][3];
			document.getElementById('option4').innerHTML=data_array[cur_answer][4];
			document.getElementById('question').innerHTML=data_array[cur_answer][0];
			
			document.getElementById('start').style.display='none';
			document.getElementById('end').style.display='inline';
			
			var intervalID = setInterval(sec, 1000);
			
		}else{

			if( num ==  data_array[cur_answer][5]){
				plus++;
				document.getElementById('result').innerHTML='Верно!';
			}else{
				document.getElementById('result').innerHTML="Неверно! Правильный ответ: " + data_array[cur_answer][data_array[cur_answer][5]];
			}
				
			cur_answer++;
			if(cur_answer < count_answer){
			
				document.getElementById('option1').innerHTML=data_array[cur_answer][1];
				document.getElementById('option2').innerHTML=data_array[cur_answer][2];
				document.getElementById('option3').innerHTML=data_array[cur_answer][3];
				document.getElementById('option4').innerHTML=data_array[cur_answer][4];
				document.getElementById('question').innerHTML=data_array[cur_answer][0];
				
			}else{
				
				document.getElementById('time').id = 'stop';
				document.getElementById('option1').style.display='none';
				document.getElementById('option2').style.display='none';
				document.getElementById('option3').style.display='none';
				document.getElementById('option4').style.display='none';
				document.getElementById('question').style.display='none';
				document.getElementById('end').style.display='inline';
				
				var percent =  Math.round(plus/count_answer*100);				
				var res = 'Плохо!';
				if(percent>70) res = 'Хорошо!';
				if(percent==100) res = 'Отлично!';
				
				document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>' + res;
			}
		}
	}