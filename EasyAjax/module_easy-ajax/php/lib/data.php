<?php
	function list_data( $data, $names, $placeholders ) {
		$id = $data["id"];
		$list = "";

		$list .= "<b>ID: ${id}</b><br>";

		for ( $i = 1; $i < count( $names[$id] ); $i++ ) {
			 $list .= $placeholders[$id][$i] . ": " . $data[ $names[$id][$i] ] . "<br>";
		}

		return $list;
	}
