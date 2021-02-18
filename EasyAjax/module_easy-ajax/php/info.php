<?php
	/** @var $CONF_LOOK_DARK */

	require "../../config.php";
	require "db.php";


	if ($CONF_LOOK_DARK) {
		print('<link rel="stylesheet" href="../css/src/dark.css">');
	}

	$id    = $_GET['id'];
	$table = $_GET['table'];

	$writer = R::getWriter();


	if ( $id == "-1" ) {
		$data = R::getAll('SELECT * FROM '.$writer->esc($table) );
	}
	else {
		$data = R::getAll('SELECT * FROM '.$writer->esc($table).' WHERE id = ?', [ $id ] );
	}

	print("<table>");

		print("<tr>");

		foreach ($data[0] as $key => $value ) {
			print("<th>${key}</th>");
		}

		print("</tr>");

		foreach ( $data as $row ) {
			print("<tr>");

			foreach ($row as $item) {
				print("<td>${item}</td>");
			}

			print("</tr>");
		}

	print("</table>");
