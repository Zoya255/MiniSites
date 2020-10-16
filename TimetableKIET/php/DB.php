<?php
	require 'libs/rb.php';

	R::setup( 'mysql:host=localhost;dbname=database', 'root', 'pass' );

	R::freeze(true);
?>