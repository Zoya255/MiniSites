<?php
	/* @var $CONF_IP   */
	/* @var $CONF_DB   */
	/* @var $CONF_USER */
	/* @var $CONF_PASS */

	require "external/rb.php";
	require "../config/config.php";
	require "lib.php";

	$host = "mysql:host=${CONF_IP};dbname=${CONF_DB}";
	R::setup($host, $CONF_USER, $CONF_PASS);
	R::freeze(true);


	$lib = new lib();

	$log = R::dispense( 'logs' );

		$log->ip                 = $_SERVER["REMOTE_ADDR"];
		$log->port               = $_SERVER["REMOTE_PORT"];
		$log->realIp             = $lib->getUserHostAddress();
		$log->url                = $_SERVER["REQUEST_URI"];

		$log->browserFamily      = $_POST["browser_family"];
		$log->browserName        = $_POST["browser_name"];
		$log->browserVersion     = $_POST["browser_version"];

		$log->deviceType         = $_POST["device_type"];
		$log->deviceFamily       = $_POST["device_family"];

		if ($_POST["device_name"] !== "NULL") {
			$log->deviceName     = $_POST["device_name"];
		}
		if ($_POST["device_manufacturer"] !== "NULL") {
			$log->deviceManufacturer = $_POST["device_manufacturer"];
		}


		$log->osFamily           = $_POST["os_family"];
		$log->osName             = $_POST["os_name"];

		if ($_POST["os_version"] !== "NULL") {
			$log->osVersion      = $_POST["os_version"];
		}
		if ($_POST["os_platform"] !== "NULL") {
			$log->osPlatform     = $_POST["os_platform"];
		}

		$log->screenWidth        = $_POST["screen_width"];
		$log->screenHeight       = $_POST["screen_height"];
		$log->screenDepth        = $_POST["screen_depth"];

	R::store( $log );