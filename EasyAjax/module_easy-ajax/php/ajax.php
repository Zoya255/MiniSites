<?php
	require "../config/config.php";

	/** @var $CONF_FIELDS */

	$id = $_POST["id"];

	foreach ($CONF_FIELDS[$id] as $field) {
		print($field.": ".$_POST[$field]."<br>");
	}
