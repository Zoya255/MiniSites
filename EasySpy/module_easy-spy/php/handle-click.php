<?php
	require "db.php";


	$click = R::dispense( 'clicks' );

		$click->ip      = $_SERVER["REMOTE_ADDR"];
		$click->url     = $_POST["url"];
		$click->click_x = $_POST["click_x"];
		$click->click_y = $_POST["click_y"];

	R::store( $click );
