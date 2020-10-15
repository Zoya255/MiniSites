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
			<h1 class="main__title">Расписание для обучающегося</h1>
			
			<h3 class="main__subtitle">Расписание звонков</h3>

			<?php include 'php/parts/timing.php'; ?>
			
			<h3 class="main__subtitle">Расписание занятий</h3>

			<div class="select__wrapper">
				Выберите группу:

				<select class="select">
					<option selected="selected" disabled>Название группы</option>

					<?php
						# получение списка всех групп

						$groups = R::getAll('SELECT * FROM `groups` ORDER BY name');

						foreach ($groups as $group) {
							echo '<option value="'.$group['id'].'">'.$group['name'].' ('.$group['code'].')</option>';	
						}
					?>
				</select>

				<button class="button" id="ajax_find_group">найти</button>
			</div>

			<table class="data_table data_table__normal data_table__bordered">
				<thead>
					<tr>
						<th>группа</th>
						<th>№</th>
						<th>ПН</th>
						<th>ВТ</th>
						<th>СР</th>
						<th>ЧТ</th>
						<th>ПТ</th>
						<th>СБ</th>
					</tr>
				</thead>
				
				<tbody id="ajax_get_group">
					<?php
						require 'php/libs/features_week.php';

						# sql запросы

						/*$pars = R::getAll('SELECT * FROM `rasp`, `pars`, `groups` WHERE `rasp`.`id_pars` = `pars`.`id` AND `rasp`.`id_groups` = `groups`.`id` ORDER BY `rasp`.`id`;');*/

						$pars = R::getAll('SELECT `rasp`.id AS rid, `rasp`.`id_groups`, `rasp`.`num`, `rasp`.`day`,  `rasp`.`id_pars`, `pars`.* , `groups`.*  FROM `rasp`, `pars`, `groups` WHERE `rasp`.`id_pars` = `pars`.`id` AND `rasp`.`id_groups` = `groups`.`id` ORDER BY `rasp`.`id`;');

						$zamena = R::getAll('SELECT * FROM `zamena`, `pars` WHERE `zamena`.`id_pars` = `pars`.`id`');

						# замена пар

						foreach ($zamena as $z) {

							$pars[ $z['id_rasp'] - 1 ]['parname'] = '<span style = "color: #ad661f">'.$z['parname'].'</span>';

						}

						# вывод данных в цикле согласно дню и номеру пары

						$b = 0;
						$i = 0;

						for ($a = 0; $a < ( count( $pars ) / 6 ); $a++ ) { 
							$i = $i + 5;

							if ($i == 30) {
								$b++;
								$i = 0;
							}

							echo('
									<tr>
										<td>'.$pars[($a * 6)]['name'].'</td>
										<td>'.$pars[($a * 6)]['num'].'</td>
										<td '. $w1 .'>'.$pars[ $a + 0  + ($b * 30) ]['parname'].'</td>
										<td '. $w2 .'>'.$pars[ $a + 5  + ($b * 30) ]['parname'].'</td>
										<td '. $w3 .'>'.$pars[ $a + 10 + ($b * 30) ]['parname'].'</td>
										<td '. $w4 .'>'.$pars[ $a + 15 + ($b * 30) ]['parname'].'</td>
										<td '. $w5 .'>'.$pars[ $a + 20 + ($b * 30) ]['parname'].'</td>
										<td '. $w6 .'>'.$pars[ $a + 25 + ($b * 30) ]['parname'].'</td>
									</tr>
								');
						}
					?>
				</tbody>
			</table>
		</main>

		<?php include 'php/parts/footer.php'; ?>

		<script src="js/libs/jquery-3.4.1.min.js"></script>
		<script src="js/ajax/ajax_group.js"></script>
	</body>

</html>