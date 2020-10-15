<?php
	require '../DB.php';

	# получение id пары из ajax-запроса

	$para = $_POST['idp'];

	# получение и вывод в таблицу прошедших консультаций

	$cons = R::getAll( 'SELECT * FROM `cons`, `prepod`, `prepodpars`, `pars` WHERE `cons`.`id_prepod` = `prepod`.`id` AND `prepod`.`id` = `prepodpars`.`id_prepod` AND `prepodpars`.`id_pars` = `pars`.`id` AND `pars`.`id` = ? AND `timedays` < ? ORDER BY `timedays`;', [ $para, date( "Y-m-d" ) ] );

	foreach ($cons as $con) {
		echo '<tr><td>'.$con['lastname'].' '.$con['name'].' '.$con['otchestvo'].'</td><td>'.$con['parname'].'</td><td class = "color_red">'.$con['timedays'].'</td><td>'.$con['prodolgitel'].'</td></tr>';
	}

	# получение и вывод в таблицу предстоящих консультаций

	$cons = R::getAll( 'SELECT * FROM `cons`, `prepod`, `prepodpars`, `pars` WHERE `cons`.`id_prepod` = `prepod`.`id` AND `prepod`.`id` = `prepodpars`.`id_prepod` AND `prepodpars`.`id_pars` = `pars`.`id` AND `pars`.`id` = ? AND `timedays` >= ? ORDER BY `timedays`;', [ $para, date( "Y-m-d" ) ] );

	foreach ($cons as $con) {
		echo '<tr><td>'.$con['lastname'].' '.$con['name'].' '.$con['otchestvo'].'</td><td>'.$con['parname'].'</td><td class = "color_green">'.$con['timedays'].'</td><td>'.$con['prodolgitel'].'</td></tr>';
	}