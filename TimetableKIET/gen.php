<?php

/*
for ($a = 1; $a < 40; $a++) { 
	for ($b = 1; $b < 6; $b++) { 
		for ($c = 1; $c < 7; $c++) { 
		
			$d = rand(1, 33);

			echo("('".$a."', '".$b."', '".$c."', '".$d."'),<br>");

		}
	}
}
*/

/*
for ( $i = 8; $i < 608; $i++ ) {
	$a = rand(1, 3);

	if ($a == 3) {
		continue;
	}

	$a = rand(1, 4);

	switch ($a) {
		case '1':
			$time = "00:30:00";
			break;
		
		case '2':
			$time = "01:00:00";
			break;

		case '3':
			$time = "01:30:00";
			break;

		case '4':
			$time = "02:00:00";
			break;
	}

	echo( "( " . $i . ", '" . randomDate("01-06-2020", "31-06-2020") . " " . randomTime("14:00", "20:00") . ":00', " . "'" . $time . "' ), <br>" );
}

function randomDate($start_date, $end_date)
{
    // Convert to timetamps
    $min = strtotime($start_date);
    $max = strtotime($end_date);

    // Generate random number using above bounds
    $val = rand($min, $max);

    // Convert back to desired date format
    return date('Y-m-d', $val);
}

function randomTime($start_time, $end_time)
{
    // Convert to timetamps
    $min = strtotime($start_time);
    $max = strtotime($end_time);

    // Generate random number using above bounds
    $val = rand($min, $max);

    // Convert back to desired date format
    return date('H:m', $val);
}
*/

/*
for ( $i = 1; $i < 1170; $i++ ) {

	if ( rand(1, 4) == 2 ){

		echo( "( " . $i . ", " . rand(1, 33) . " ), <br>" );

	}
	
}
*/