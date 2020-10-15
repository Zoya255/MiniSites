<?php
	require '../DB.php';
	require '../libs/features_week.php';

	# получение id группы из ajax-запроса

	$group = $_POST['idg'];

	# sql-запросы

	$pars = R::getAll('SELECT * FROM `rasp`, `pars`, `groups` WHERE `rasp`.`id_pars` = `pars`.`id` AND `rasp`.`id_groups` = `groups`.`id` AND `rasp`.`id_groups` = ? LIMIT 1000;', [ $group ]);

	$zamena = R::getAll('SELECT * FROM `zamena`, `pars` WHERE `zamena`.`id_pars` = `pars`.`id`');

	# замена пар

	foreach ($zamena as $z) {

		if ( $pars[ $z['id_rasp'] - 1 ]['id_groups'] == $group ) {
			$pars[ $z['id_rasp'] - 1 ]['parname'] = '<span style = "color: #ad661f">'.$z['parname'].'</span>';
		}
		
	}

	# вывод данных в цикле согласно дню и номеру пары

	for ($a = 0; $a < (count($pars) / 6); $a++) { 
		$i = $i + 5;

		if ($i == 30) {
			$b++;
			$i = 0;
		}

		echo('	
				<tr>
				<td>'.$pars[($a * 6)]['name'].'</td>
				<td>'.$pars[($a * 6)]['num'].'</td>
				<td ' . $w1 . '>'.$pars[ $a + 0 + ($b * 30) ]['parname'].'</td>
				<td ' . $w2 . '>'.$pars[ $a + 5 + ($b * 30) ]['parname'].'</td>
				<td ' . $w3 . '>'.$pars[ $a + 10 + ($b * 30) ]['parname'].'</td>
				<td ' . $w4 . '>'.$pars[ $a + 15 + ($b * 30) ]['parname'].'</td>
				<td ' . $w5 . '>'.$pars[ $a + 20 + ($b * 30) ]['parname'].'</td>
				<td ' . $w6 . '>'.$pars[ $a + 25 + ($b * 30) ]['parname'].'</td>
				</tr>
			');
	};