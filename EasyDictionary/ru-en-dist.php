<?php
	require "php/db.php";
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Простой переводчик</title>

		<link rel="stylesheet" href="css/global.css">
	</head>

	<body class="global__body">
		<header class="global__header">
			<h1 class="global__header-logo">
				<a href="index.php">Простой переводчик</a>
			</h1>
		</header>

		<aside class="global__aside">
			<nav class="global__aside-nav">
				<h3 class="global__aside-nav-title">меню</h3>

				<ul class="global__nav-list">
					<li class="global__nav-list-item">
						<a href="ru-en-dist.php">рус-англ словарь</a>
					</li>

					<li class="global__nav-list-item">
						<a href="en-ru-dist.php">англ-рус словарь</a>
					</li>
				</ul>
			</nav>
		</aside>

		<main class="global__main">
			<h2 class="global__main-header">
				Рус-англ словарь
			</h2>

			<table class="global__main-table">
				<thead>
					<tr>
						<th>Русский</th>
						<th>Английский</th>
					</tr>
				</thead>

				<tbody>
					<?php
						$data = R::getAll("SELECT `links`.`id`, `words_ru`.`word_ru`, `words_en`.`word_en`
											   FROM `words_ru`, `words_en`, `links`
											   WHERE `words_ru`.`id` = `links`.`id_ru` AND `words_en`.`id` = `links`.`id_en`
											   ORDER BY `word_ru`;");

						foreach ($data as $dat) {
							print("<tr><td>${dat["word_ru"]}</td><td>${dat["word_en"]}</td></tr>");
						}
					?>
				</tbody>
			</table>
		</main>

		<footer class="global__footer">
			Просто. Открыто. Для всех.<br>
			Easy. Open. For everybody.<br>
			18.10.2020
		</footer>
	</body>
</html>