<?php
	$CONF_EMAILS  = [
		"codeoon@mail.ru"
	];


	$headers = <<<HEADERS
	MIME-Version: 1.0
	Content-type: text/html; charset=utf-8
	From: Pixel <info@pixel27.ru>
	X-Mailer: PHP/7.4.14
	HEADERS;


	$variables = [];

	$variables['title']       = "Codeoon Automatic Email";
	$variables['preheader']   = "Штатное техническое сообщение | ";
	$variables['message']     = "Если это сообщение дошло до вас в целости и сохранности, значит админ молодец и" .
								"справился с возложенной на него задачей. Не забудьте похвалить его за такие старания.";
	$variables['footer_from'] = "Sincerely from Develop";
	$variables['footer_by']   = "Created by Codeoon";


	$template = file_get_contents("template.html");

	foreach($variables as $key => $value) {
		$template = str_replace('{{ '.$key.' }}', $value, $template);
	}


	foreach ($CONF_EMAILS as $email) {

		echo mail( $email, "Pixel Info | Тестовое", $template, $headers );

	}
