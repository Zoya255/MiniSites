<link rel="stylesheet" href="css/min/dark.min.css">

<?php
	/* @var $CONF_UUID       */
	/* @var $CONF_PROJECT    */
	/* @var $CONF_PROJECT_ID */

	require "php/lib/stats.php";


	$stats = new Stats();

	# ========================== Time Charts ==========================

	# ========================== Click Maps ==========================

	if ( !empty($_GET['clickMap']) ) {

		if ( $_GET['clickMap'] == "Full" ) {
			$clicks = $stats->get_clicks_all( $CONF_PROJECT_ID );

			foreach ($clicks as $click) {
				print("<div class='dot' style='top: ${click["click_y"]}; left: ${click["click_x"]}'></div>");
			}
		}
		else{
			$clicks = $stats->get_clicks( $CONF_PROJECT_ID, $_GET['clickMap'] );

			foreach ($clicks as $click) {
				print("<div class='dot' style='top: ${click["click_y"]}; left: ${click["click_x"]}'></div>");
			}
		}

	}

    # ========================== Requests ==========================

	else if ( !empty($_GET['requests']) ) {

		print("<h1>${CONF_PROJECT} / Requests / ${_GET['requests']}</h1>");

		$sys_names_desk = [ "Windows", "Linux", "Ubuntu", "Mac OS" ];
		$sys_names_mob  = [ "Android", "iOS" ];

		if ( $_GET['requests'] == "Full" ) {
			print("<h2>Desktop</h2>");

			foreach ($sys_names_desk as $sys_name) {
                print("<h3>$sys_name</h3>");
                print($stats->get_requests_all( $CONF_PROJECT_ID,$sys_name."%", "full", true ));
			}

			print("<h2>Mobile</h2>");

            foreach ($sys_names_mob as $sys_name) {
                print("<h3>$sys_name</h3>");
                print($stats->get_requests_all( $CONF_PROJECT_ID,$sys_name."%", "full", true ));
            }
		}
		else{
            print("<h2>Desktop</h2>");

            foreach ($sys_names_desk as $sys_name) {
                print("<h3>$sys_name</h3>");
                print($stats->get_requests_all( $CONF_PROJECT_ID,$sys_name."%", $_GET['requests'], true ));
            }

            print("<h2>Mobile</h2>");

            foreach ($sys_names_mob as $sys_name) {
                print("<h3>$sys_name</h3>");
                print($stats->get_requests_all( $CONF_PROJECT_ID,$sys_name."%", $_GET['requests'], true ));
            }
		}

	}

    # ========================== Choice ==========================

	else{
		print("<h1>Project ${CONF_PROJECT}</h1>");

		print("<h3>UUID: ${CONF_UUID}</h3>");
		print("<h3>ID:   ${CONF_PROJECT_ID}</h3>");


        print("<h2>TimeCharts</h2>");

        print("<p><a class='btn' href='stats-page.php?timeCharts=Full'>Future</a></p>");



		print("<h2>ClickMaps</h2>");

		print("<p><a class='btn' href='stats-page.php?clickMap=Full'>Full data</a></p>");

		print("<hr class='hr-md'>");

		$pages = $stats->get_pages($CONF_PROJECT_ID, true);

		foreach ($pages as $page) {
			print("<p><a href='stats-page.php?clickMap=${page}'>${page}</a></p>");
		}


		print("<h2>RequestTables</h2>");

		print("<p><a class='btn' href='stats-page.php?requests=Full'>Full data</a></p>");

		print("<hr class='hr-md'>");

		$pages = $stats->get_pages($CONF_PROJECT_ID);

		foreach ($pages as $page) {
			print("<p><a href='stats-page.php?requests=${page}'>${page}</a></p>");
		}

	}
