<?php
	/* @var $CONF_IP     */
	/* @var $CONF_DB_LOG */
	/* @var $CONF_USER   */
	/* @var $CONF_PASS   */

	require "external/rb.php";


	$host = "mysql:host=localhost;dbname=easydictionary";
	R::setup($host, "root", "root");
	R::freeze(true);
