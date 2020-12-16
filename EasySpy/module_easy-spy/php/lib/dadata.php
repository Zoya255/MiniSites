<?php
	require __DIR__."/../db.php";


	class DaData{

		private string $APIKEY;

		function __construct( string $APIKEY ) {
			$this->APIKEY = $APIKEY;
		}

		function checkIP( $ip ) {
			$str = R::getCell( 'SELECT ip FROM ips WHERE ip = ? LIMIT 1', [ $ip ] );

			return (bool) $str;
		}

		function getCityByIP( $ip, $is_city_return = false ) {

			$headers = array(
				"Accept: application/json",
				"Authorization: Token " . $this->APIKEY
			);

			$ch = curl_init("https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}");
				curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				$json = curl_exec($ch);
			curl_close($ch);

			$array = json_decode( $json, true );

			if ( $array["location"] == null ) {
				if ($is_city_return) {
					return null;
				}

				return false;
			}
			else {
				$geo_ip = R::dispense( 'ips' );

				$geo_ip->ip               = $ip;

				$geo_ip->postal_code      = $array["location"]["data"]["postal_code"];
				$geo_ip->country          = $array["location"]["data"]["country"];
				$geo_ip->country_iso_code = $array["location"]["data"]["country_iso_code"];
				$geo_ip->region           = $array["location"]["data"]["region"];
				$geo_ip->region_type_full = $array["location"]["data"]["region_type_full"];
				$geo_ip->region_iso_code  = $array["location"]["data"]["region_iso_code"];
				$geo_ip->city             = $array["location"]["data"]["city"];
				$geo_ip->city_type_full   = $array["location"]["data"]["city_type_full"];
				$geo_ip->geo_lat          = $array["location"]["data"]["geo_lat"];
				$geo_ip->geo_lon          = $array["location"]["data"]["geo_lon"];

				R::store( $geo_ip );
			}

			if ($is_city_return) {
				return $array["location"]["data"]["city"];
			}

			return true;

		}

	}
