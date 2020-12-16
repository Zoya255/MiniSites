<style>
	body{
        margin: 1.5em 2em;

		background-color: #272822;
	}
	h1{
        font-family: Consolas, monospace;

        color: #cccccc;
		border-bottom: 1px solid #cccccc;
	}
    h2{
		width: 75%;

        font-family: Consolas, monospace;

        color: #cccccc;
        border-bottom: 1px dashed #cccccc;
	}
    h3{
		width: 50%;

        font-family: Consolas, monospace;

        color: #cccccc;
    	border-bottom: 1px dashed #cccccc;
	}
	p{
		font-family: Consolas, monospace;

		color: #cccccc;
	}
	b{
		font-size: 1.2em;
	}
	a{
		color: #cccccc;
		text-decoration: none;
	}
	td{
		padding: 2px 8px;

        font-family: Consolas, monospace;
		white-space: nowrap;

		color: #cccccc;
	}
	div{
		position: absolute;

		width: 3px;
		height: 3px;

		background-color: rgba(255, 255, 255, 0.3);
	}
</style>

<?php
	require "php/lib/stats.php";


	$stats = new Stats();

	if ( !empty($_GET['clickMap']) ) {

		if ( $_GET['clickMap'] == "full" ) {
			$clicks = $stats->get_clicks_all();

			foreach ($clicks as $click) {
				print("<div style='top: ${click["click_y"]}; left: ${click["click_x"]}'></div>");
			}
		}
		else{
			$clicks = $stats->get_clicks($_GET['clickMap']);

			foreach ($clicks as $click) {
				print("<div style='top: ${click["click_y"]}; left: ${click["click_x"]}'></div>");
			}
		}

	}
	else if ( !empty($_GET['requests']) ) {

		print("<h1>${_GET['requests']}</h1>");

		if ( $_GET['requests'] == "full" ) {
			print("<h2>Desktop</h2>");

			print("<h3>Windows</h3>");

			echo $stats->get_requests_all("Win32", "full", true);

			print("<h3>Linux</h3>");

			echo $stats->get_requests_all("Linux x86_64", "full", true);


			print("<h2>Mobile</h2>");

			print("<h3>Android</h3>");

			echo $stats->get_requests_all("Android", "full", true);

			print("<h3>iOS</h3>");

			echo $stats->get_requests_all("iPhone", "full", true);
		}
		else{
			print("<h2>Desktop</h2>");

			print("<h3>Windows</h3>");

			echo $stats->get_requests_all("Win32", $_GET['requests'], true);

			print("<h3>Linux</h3>");

			echo $stats->get_requests_all("Linux x86_64", $_GET['requests'], true);


			print("<h2>Mobile</h2>");

			print("<h3>Android</h3>");

			echo $stats->get_requests_all("Android", $_GET['requests'], true);

			print("<h3>iOS</h3>");

			echo $stats->get_requests_all("iPhone", $_GET['requests'], true);
		}

	}
	else{

		print("<h1>ClickMaps</h1>");

		print("<p><b><a href='stats-page.php?clickMap=full'>FULL</a></b></p>");

		$pages = $stats->get_pages(true);

		foreach ($pages as $page) {
			print("<p><a href='stats-page.php?clickMap=${page}'>${page}</a></p>");
		}


		print("<h1>RequestTables</h1>");

		print("<p><b><a href='stats-page.php?requests=full'>FULL</a></b></p>");

		$pages = $stats->get_pages();

		foreach ($pages as $page) {
			print("<p><a href='stats-page.php?requests=${page}'>${page}</a></p>");
		}

	}

