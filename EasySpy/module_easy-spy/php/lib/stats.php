<?php
	require __DIR__."/../db.php";


	class Stats{

		function get_pages( int $project_id, bool $for_clicks = false ) {

			if ($for_clicks) {
				return R::getCol("SELECT `url` FROM `clicks` WHERE `id_project` = ? GROUP BY `url`",
					                  [ $project_id ]);
			}
			else{
				return R::getCol("SELECT `url` FROM `requests` WHERE `id_project` = ? GROUP BY `url`",
					                  [ $project_id ]);
			}

		}

		function get_clicks( int $project_id, string $page_url ) {

			return R::getAll("SELECT `click_x`, `click_y` FROM `clicks` WHERE `id_project` = ? AND `url` = ?",
				                  [ $project_id, $page_url ] );

		}

		function get_clicks_all( int $project_id ) {

			return R::getAll("SELECT `click_x`, `click_y` FROM `clicks` WHERE `id_project` = ?",
				                  [ $project_id ] );

		}

		function get_requests_all( int $project_id, string $os_name, string $url = "full", bool $is_html = false ) {

			if ($url == "full") {
                $data = R::getAll("SELECT COUNT(`requests`.`ip`) num, `requests`.`ip`, `url`, `browser_name`, `os_name`, `screen_width`, `screen_height`, `city_type_full`, `city`
                                       FROM `requests`, `ips`
                                       WHERE `id_project` = ? AND `os_name` LIKE ? AND `requests`.`ip` = `ips`.`ip`
                                       GROUP BY `ip`, `browser_name`
                                       ORDER BY `num` DESC;",
	                                   [ $project_id, $os_name ] );
			}
			else {
                $data = R::getAll("SELECT COUNT(`requests`.`ip`) num, `requests`.`ip`, `url`, `browser_name`, `os_name`, `screen_width`, `screen_height`, `city_type_full`, `city`
                                       FROM `requests`, `ips`
                                       WHERE `id_project` = ? AND `os_name` LIKE ? AND `url` = ? AND `requests`.`ip` = `ips`.`ip`
                                       GROUP BY `ip`, `browser_name`
                                       ORDER BY `num` DESC;",
	                                   [ $project_id, $os_name, $url ] );
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