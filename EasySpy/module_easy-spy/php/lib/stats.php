<?php
	require __DIR__."/../db.php";


	class Stats{

		function get_pages( bool $for_clicks = false ) {
			if ($for_clicks) {
				return R::getCol("SELECT `url` FROM `clicks` GROUP BY `url`");
			}
			else{
				return R::getCol("SELECT `url` FROM `requests` GROUP BY `url`");
			}
		}

		function get_clicks( string $page_url ) {
			return R::getAll("SELECT `click_x`, `click_y` FROM `clicks` WHERE `url` = ?", [ $page_url ] );
		}

		function get_clicks_all() {
			return R::getAll("SELECT `click_x`, `click_y` FROM `clicks`" );
		}

		function get_requests_all( $os_platform, $url = "full", $is_html = false ) {

			if ($url == "full") {
				if ($os_platform == "Android") {
					$data = R::getAll("SELECT COUNT(`requests`.`ip`) num, `requests`.`ip`, `url`, `browser_name`, `os_name`, `screen_width`, `screen_height`, `city_type_full`, `city` FROM `requests`, `ips` WHERE `os_name` LIKE 'Android%' AND `requests`.`ip` = `ips`.`ip` GROUP BY `ip`, `browser_name` ORDER BY `num` DESC;" );
				}
				elseif ($os_platform == "Mac OS") {
					$data = R::getAll("SELECT COUNT(`requests`.`ip`) num, `requests`.`ip`, `url`, `browser_name`, `os_name`, `screen_width`, `screen_height`, `city_type_full`, `city` FROM `requests`, `ips` WHERE `os_name` LIKE 'Mac OS%' AND `requests`.`ip` = `ips`.`ip` GROUP BY `ip`, `browser_name` ORDER BY `num` DESC;" );
				}
				elseif ($os_platform == "Windows") {
					$data = R::getAll("SELECT COUNT(`requests`.`ip`) num, `requests`.`ip`, `url`, `browser_name`, `os_name`, `screen_width`, `screen_height`, `city_type_full`, `city` FROM `requests`, `ips` WHERE `os_name` LIKE 'Windows%' AND `requests`.`ip` = `ips`.`ip` GROUP BY `ip`, `browser_name` ORDER BY `num` DESC;" );
				}
				else{
					$data = R::getAll("SELECT COUNT(`requests`.`ip`) num, `requests`.`ip`, `url`, `browser_name`, `os_name`, `screen_width`, `screen_height`, `city_type_full`, `city` FROM `requests`, `ips` WHERE `os_platform` = ? AND `requests`.`ip` = `ips`.`ip` GROUP BY `ip`, `browser_name` ORDER BY `num` DESC;", [ $os_platform ] );
				}
			}
			else {
				if ($os_platform == "Android") {
					$data = R::getAll("SELECT COUNT(`requests`.`ip`) num, `requests`.`ip`, `url`, `browser_name`, `os_name`, `screen_width`, `screen_height`, `city_type_full`, `city` FROM `requests`, `ips` WHERE `os_name` LIKE 'Android%' AND `url` = ? AND `requests`.`ip` = `ips`.`ip` GROUP BY `ip`, `browser_name` ORDER BY `num` DESC;", [ $url ] );
				}
				else{
					$data = R::getAll("SELECT COUNT(`requests`.`ip`) num, `requests`.`ip`, `url`, `browser_name`, `os_name`, `screen_width`, `screen_height`, `city_type_full`, `city` FROM `requests`, `ips` WHERE `os_platform` = ? AND `url` = ? AND `requests`.`ip` = `ips`.`ip` GROUP BY `ip`, `browser_name` ORDER BY `num` DESC;", [ $os_platform, $url ] );
				}
			}

			if ($is_html) {
				$html = "<table>";

				foreach ($data as $dat) {
					if ($dat["city_type_full"] == "город") {
						$city_type = "г.";
					}

					$html = $html . "<tr>";
					$html = $html . "<td>${dat["num"]}</td>";
					$html = $html . "<td>${city_type} ${dat["city"]}</td>";
					$html = $html . "<td>${dat["ip"]}</td>";
					$html = $html . "<td>${dat["browser_name"]}</td>";
					$html = $html . "<td>${dat["os_name"]}</td>";
					$html = $html . "<td>${dat["screen_width"]} x ${dat["screen_height"]}</td>";
					$html = $html . "</tr>";
				}

				return $html . "</table>";
			}
			else{
				return $data;
			}

		}

	}