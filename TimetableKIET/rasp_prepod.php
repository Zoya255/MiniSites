<!DOCTYPE html>
<html lang="ru">

	<head>
		<meta charset="UTF-8">
		<title>ХПЭТ Расписание</title>
		<link rel="stylesheet" type="text/css" href="css/global.css">

	</head>

	<body class="body">
		<?php include 'php/parts/header.php'; ?>
		<?php include 'php/parts/aside.php'; ?>
		<?php require 'php/DB.php'; ?>

		<main class="main">
			<h1 class="main__title">Расписание для преподавателей</h1>
			
			<h3 class="main__subtitle">Расписание звонков</h3>

			<?php include 'php/parts/timing.php'; ?>	
			
			<h3 class="main__subtitle">Расписание занятий</h3>

			<div class="select__wrapper">
				Преподаватель: 

				<select class="select">
					<option selected="selected" disabled>Выберите преподавателя</option>
					
					<?php
						# получение списка всех преподавателей

						$prepods = R::getAll('SELECT id, lastname, name, otchestvo FROM `prepod` ORDER BY lastname;');

						foreach ($prepods as $prepod) {
							echo '<option value="'.$prepod['id'].'">'.$prepod['lastname'].' '.$prepod['name'].' '.$prepod['otchestvo'].'</option>';
						}
					?>
				</select>

				<button class="button" id="ajax_find_prepod">найти</button>
			</div>

			<table class="data_table data_table__normal data_table__bordered">
				<thead>
					<tr>
						<th>ФИО</th>
						<th>№</th>
						<th>ПН</th>
						<th>ВТ</th>
						<th>СР</th>
						<th>ЧТ</th>
						<th>ПТ</th>
						<th>СБ</th>
					</tr>
				</thead>
				
				<tbody id="ajax_get_prepod">
					<?php

						# sql-запрос

						$prepods = R::getAll('SELECT `prepod`.`id`, `pars`.`parname`, `prepod`.`name`, `prepod`.`lastname`, `prepod`.`otchestvo`, `rasp`.`num`, `rasp`.`day`, `groups`.`name` AS groupname FROM `rasp`, `pars`, `prepodpars`, `prepod`, `groups` WHERE `rasp`.`id_pars` = `pars`.`id` AND `pars`.`id` = `prepodpars`.`id_pars` AND `prepod`.`id` = `prepodpars`.`id_prepod` AND `groups`.`id` = `rasp`.`id_groups` GROUP BY `num`, `day`, `groups`.`name` ORDER BY `id_prepod`, `num`, `day`;');

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
					?>
				</tbody>
			</table>
		</main>

		<?php include 'php/parts/footer.php'; ?>

		<script src="js/libs/jquery-3.4.1.min.js"></script>
		<script src="js/ajax/ajax_prepods.js"></script>
	</body>

</html>