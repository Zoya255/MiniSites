<?php
	require '../DB.php';

	# получение id преподавателя из ajax-запроса

	$prepod = $_POST['idp'];

	# sql-запрос

	$prepods = R::getAll('SELECT `prepod`.`id`, `pars`.`parname`, `prepod`.`name`, `prepod`.`lastname`, `prepod`.`otchestvo`, `rasp`.`num`, `rasp`.`day`, `groups`.`name` AS groupname FROM `rasp`, `pars`, `prepodpars`, `prepod`, `groups` WHERE `rasp`.`id_pars` = `pars`.`id` AND `pars`.`id` = `prepodpars`.`id_pars` AND `prepod`.`id` = `prepodpars`.`id_prepod` AND `groups`.`id` = `rasp`.`id_groups` AND `prepod`.`id` = ? GROUP BY `num`, `day`, `groups`.`name` ORDER BY `id_prepod`, `num`, `day`;', [ $prepod ]);

	$i = 0;

	# цикл вывода преподавателей

	while ( $i < count( $prepods ) ) {
		$fio = $prepods[$i]["lastname"]." ".$prepods[$i]["name"]." ".$prepods[$i]["otchestvo"];

		print("<tr>");

			print("<td>".$fio."</td>");
			print("<td>".$prepods[$i]["num"]."</td>");

			# цикл вывода пар по дням

			for ( $num = 1; $num < 7; $num++ ) {

				# выделение текущего дня недели

				if (date("w") == $num) {
					echo('<td class="color_green">');
				}
				else{
					echo('<td>');
				}

				$temp = "";
	
				# цикл вывода пар в одном дне

				while ( $prepods[$i]["day"] == $num ) {
					$temp = $temp . ( $prepods[$i]["parname"].' | '.$prepods[$i]["groupname"].'<br>');
					$i = $i + 1;
				}

				echo($temp);

				echo('</td>');
			}
	
		print("</tr>");

		$i = $i + 1; 
	}