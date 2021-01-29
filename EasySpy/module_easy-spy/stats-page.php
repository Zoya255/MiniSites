<link rel="stylesheet" href="css/min/dark.min.css">

<?php
	/* @var $CONF_PROJECT */

	require "php/lib/stats.php";


	$stats = new Stats();

	# ========================== Time Charts ==========================

	# ========================== Click Maps ==========================

	if ( !empty($_GET['clickMap']) ) {

		if ( $_GET['clickMap'] == "full" ) {
			$clicks = $stats->get_clicks_all();

			foreach ($clicks as $click) {
				print("<div class='dot' style='top: ${click["click_y"]}; left: ${click["click_x"]}'></div>");
			}
		}
		else{
			$clicks = $stats->get_clicks($_GET['clickMap']);

			foreach ($clicks as $click) {
				print("<div class='dot' style='top: ${click["click_y"]}; left: ${click["click_x"]}'></div>");
			}
		}

	}

    # ========================== Requests ==========================

	else if ( !empty($_GET['requests']) ) {

		print("<h1>${_GET['requests']}</h1>");

		$sys_names_desk = [ "Windows", "Linux", "Ubuntu", "Mac OS" ];
		$sys_names_mob  = [ "Android", "iOS" ];

		if ( $_GET['requests'] == "full" ) {
			print("<h2>Desktop</h2>");

			foreach ($sys_names_desk as $sys_name) {
                print("<h3>$sys_name</h3>");
                print($stats->get_requests_all($sys_name."%", "full", true));
			}

			print("<h2>Mobile</h2>");

            foreach ($sys_names_mob as $sys_name) {
                print("<h3>$sys_name</h3>");
                print($stats->get_requests_all($sys_name."%", "full", true));
            }
		}
		else{
            print("<h2>Desktop</h2>");

            foreach ($sys_names_desk as $sys_name) {
                print("<h3>$sys_name</h3>");
                print($stats->get_requests_all($sys_name."%", $_GET['requests'], true));
            }

            print("<h2>Mobile</h2>");

            foreach ($sys_names_mob as $sys_name) {
                print("<h3>$sys_name</h3>");
                print($stats->get_requests_all($sys_name."%", $_GET['requests'], true));
            }
		}

	}

    # ========================== Choice ==========================

	else{
		print("<h1>Project ${CONF_PROJECT}</h1>");


        print("<h2>TimeCharts</h2>");

        print("<p><a class='btn' href='stats-page.php?timeCharts=full'>Full data</a></p>");



		print("<h2>ClickMaps</h2>");

		print("<p><a class='btn' href='stats-page.php?clickMap=full'>Full data</a></p>");

		print("<hr class='hr-md'>");

		$pages = $stats->get_pages(true);

		foreach ($pages as $page) {
			print("<p><a href='stats-page.php?clickMap=${page}'>${page}</a></p>");
		}


		print("<h2>RequestTables</h2>");

		print("<p><a class='btn' href='stats-page.php?requests=full'>Full data</a></p>");

		print("<hr class='hr-md'>");

		$pages = $stats->get_pages();

		foreach ($pages as $page) {
			print("<p><a href='stats-page.php?requests=${page}'>${page}</a></p>");
		}

	}
