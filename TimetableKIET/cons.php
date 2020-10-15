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
		<?php include 'php/DB.php'; ?>

		<main class="main">
			<h1 class="main__title">Расписание консультаций преподавателей</h1>

			<div class="select__wrapper">
				Выберите предмет:

				<select class="select">
					<option selected="selected" disabled>Выберите предмет</option>

					<?php
						# получение списка всех пар

						$pars = R::getAll('SELECT * FROM `pars`');
						
						foreach ($pars as $para) {
							echo '<option value="'.$para['id'].'">'.$para['parname'].'</option>';	
						}
					?>
				</select>

				<button class="button" id="ajax_find_cons">найти</button>
			</div>

			<table class="data_table data_table__normal data_table__bordered">
				<thead>
					<tr>
						<th>Преподаватель</th>
						<th>Предмет</th>
						<th>Дата/время</th>
						<th>Длина</th>
					</tr>
				</thead>
				
				<tbody id="ajax_get_cons">
					<?php
						# sql-запрос

						$cons = R::getAll('SELECT * FROM `cons`, `prepod`, `prepodpars`, `pars` WHERE `cons`.id_prepod = `prepod`.id AND `prepod`.id = `prepodpars`.id_prepod AND `prepodpars`.id_pars = `pars`.id AND `timedays` >= ? ORDER BY `timedays`;', [ date("Y-m-d") ] );

						# вывод консультаций в цикле

						foreach ($cons as $con) {
							echo '<tr><td>'.$con['lastname'].' '.$con['name'].' '.$con['otchestvo'].'</td><td>'.$con['parname'].'</td><td class = "color_green">'.$con['timedays'].'</td><td>'.substr($con['prodolgitel'], 0, -3).'</td></tr>';
						}
					?>
				</tbody>
			</table>

		</main>

		<?php include 'php/parts/footer.php'; ?>

		<script src="js/libs/jquery-3.4.1.min.js"></script>
		<script src="js/ajax/ajax_cons.js"></script>
	</body>

</html>