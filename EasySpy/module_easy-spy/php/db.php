<?php
	/* @var $CONF_IP      */
	/* @var $CONF_DB_LOG  */
	/* @var $CONF_USER    */
	/* @var $CONF_PASS    */

	require "external/rb.php";
	require __DIR__ . "/../../config.php";


	$host = "mysql:host=${CONF_IP};dbname=${CONF_DB_LOG}";
	R::setup($host, $CONF_USER, $CONF_PASS);
	R::freeze(true);
