<!DOCTYPE html>
<html lang="ru">

	<head>
		<meta charset="UTF-8">
		<title>ХПЭТ Расписание</title>
		<link rel="stylesheet" type="text/css" href="css/global.css">
	</head>

	<body class="body">
		<?php include 'php/parts/header.php'; ?>
		<?php include 'php/parts/aside.php'; ?>

		<main class="main">
			<h1 class="main__title">Главная</h1>

			<table class="table_menu">
				<tr>
					<td>
						<a href="rasp.php">
							<img src="img/student.png" alt="Ваш браузер не поддерживает данное изображение">
							<p>Расписание для обучающегося</p>
						</a>
					</td>

					<td>
						<a href="rasp_prepod.php">
							<img src="img/teacher.png" alt="Ваш браузер не поддерживает данное изображение">
							<p>Расписание для преподавателя</p>
						</a>
					</td>
				</tr>
				<tr>
					<td width="50%">
						<a href="cons.php">
							<img src="img/cons.png" alt="Ваш браузер не поддерживает данное изображение">
							<p>Расписание консультаций</p>
						</a>
					</td>

					<td>
						<a href="plan.php"> 
							<img src="img/plan.png" alt="Ваш браузер не поддерживает данное изображение">
							<p>Учебный план на год</p>
						</a>
					</td>
				</tr>
			</table>
		</main>

		<?php include 'php/parts/footer.php'; ?>
	</body>

</html>