<link rel="stylesheet" href="../../css/min/dark.min.css">

<h1>Check ip addresses...</h1>

<?php
	/* @var $APIKEY */

	require "../lib/features.php";
	require "../lib/dadata.php"; // include db.php
	require "../../config/config.php";


	$ips    = R::getAll("SELECT `ip` FROM `requests` GROUP BY `ip`");
	$DaData = new DaData($APIKEY);

	foreach ($ips as $ip) {

		if ( !( $DaData->checkIP($ip['ip']) ) ) {

			echo "${ip['ip']}  ";
			echo $DaData->getCityByIP($ip['ip'], true);
			echo "<br>";
		}

	}
