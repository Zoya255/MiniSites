<?php
	/* @var $APIKEY          */
	/* @var $CONF_PROJECT_ID */

	require "lib/features.php";
	require "lib/dadata.php"; // include db.php
	require "../../config.php";


	$feature = new Features();

	$request = R::dispense( 'requests' );

		$request->ip             = $_SERVER["REMOTE_ADDR"];
		$request->id_project     = $CONF_PROJECT_ID;
		$request->port           = $_SERVER["REMOTE_PORT"];
		$request->realIp         = $feature->getUserHostAddress();
		$request->url            = $_POST["url"];
		$request->browserFamily  = $_POST["browser_family"];
		$request->browserName    = $_POST["browser_name"];
		$request->browserVersion = $_POST["browser_version"];
		$request->deviceType     = $_POST["device_type"];
		$request->deviceFamily   = $_POST["device_family"];

		if ($_POST["device_name"] !== "NULL") {
			$request->deviceName = $_POST["device_name"];
		}
		if ($_POST["device_manufacturer"] !== "NULL") {
			$request->deviceManufacturer = $_POST["device_manufacturer"];
		}

		$request->osFamily = $_POST["os_family"];
		$request->osName   = $_POST["os_name"];

		if ($_POST["os_version"] !== "NULL") {
			$request->osVersion = $_POST["os_version"];
		}
		if ($_POST["os_platform"] !== "NULL") {
			$request->osPlatform = $_POST["os_platform"];
		}

		$request->screenWidth  = $_POST["screen_width"];
		$request->screenHeight = $_POST["screen_height"];
		$request->screenDepth  = $_POST["screen_depth"];

	R::store( $request );


	$DaData = new DaData($APIKEY);

	if ($_SERVER["REMOTE_ADDR"] == "127.0.0.1") {

		if ( !($DaData->checkIP("95.31.119.30")) ) {
			$DaData->getCityByIP("95.31.119.30");
		}

	}
	else{

		if ( !($DaData->checkIP($_SERVER["REMOTE_ADDR"])) ) {
			$DaData->getCityByIP($_SERVER["REMOTE_ADDR"]);
		}

	}
