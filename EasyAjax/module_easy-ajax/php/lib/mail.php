<?php
	/*/
	/ / Это функция для создания и отправки email-сообщений
	/ /
	/ / Обладает следующими параметрами:
	/ /   * email_from - от кого / "Admin <admin@example.com>"
	/ /   * email_to - для кого / "user@example.com"
	/ /   * variables - массив с параметрами текста письма / [ "", "", [], [] ]
	/ /       * title - заголовок письма / "Hello, world"
	/ /       * preheader - отображение первых строк письма в почтовых клиентах / "It`s my first email"
	/ /       * message - текст письма / [ [], [] ]
	/ /           * text - абзац / [ "t", "Lorem ipsum..." ]
	/ /           * btn - кнопка-ссылка / [ "b", "Click me", "https://www.example.com" ]
	/ /       * footer - подпись, от кого / [ [], [] ]
	/ /           * text - абцаз / [ "t", "From Codeoon" ]
	/ /   * x_mailer - чем отправлено сообщение / "PHP/7.4.14"
	/ /   * type_mail - шаблон сообщения / "type"
	/ /       * none - простое текстовое сообщение
	/ /       * easy - простой адаптивный шаблон ( по умолчанию )
	/*/

	function email_send( $email_from, $email_to, $variables, $x_mailer = "PHP/7.4.14", $type_mail = "easy" ) {

		// установка заголовков
		$headers = <<<HEADERS
		MIME-Version: 1.0
		Content-type: text/html; charset=utf-8
		From: ${email_from}
		X-Mailer: ${x_mailer}
		HEADERS;

		// выбор шаблона
		if ( $type_mail == "easy" ) {
			$base_url = "../data/templates-email/transactional/min/";
		}
		elseif ( $type_mail == "none" ) {
			$base_url = "../data/templates-email/none/min/";
		}
		else {
			$base_url = "../data/templates-email/none/min/";
		}

		// подгузка компонентов
		$template = file_get_contents( $base_url . "stationery.min.html");
		$template_text_main = file_get_contents($base_url . "text_main.min.html");
		$template_btn = file_get_contents($base_url . "button.min.html");
		$template_text_footer = file_get_contents($base_url . "text_footer.min.html");

		// финальный цикл ( вставка компонентов )
		foreach($variables as $key => $value) {

			if ( $key == "message" ) {
				$message = "";

				foreach ( $variables["message"] as $message_row ) {
					if ( $message_row[0] == "t" ) {
						$message .= str_replace('{{ text }}', $message_row[1], $template_text_main );
					}
					elseif ( $message_row[0] == "b" ) {
						$btn = str_replace('{{ text }}', $message_row[1], $template_btn );
						$btn = str_replace('{{ link }}', $message_row[2], $btn );
						$message .= $btn;
					}
				}

				$template = str_replace('{{ message }}', $message, $template);
			}
			elseif ( $key == "footer" ) {
				$footer = "";

				foreach ( $variables["footer"] as $footer_row ) {
					$footer .= str_replace('{{ text }}', $footer_row[1], $template_text_footer);
				}

				$template = str_replace('{{ footer }}', $footer, $template);
			}
			else {
				$template = str_replace('{{ '.$key.' }}', $value, $template);
			}

		}

		// отправка сообщения
		mail( $email_to, $variables["title"], $template, $headers );

	}

	// Test for function

	/*/

	$vars = [];

	$vars['title'] = "Codeoon Automatic Email";
	$vars['preheader'] = "Штатное техническое сообщение | ";
	$vars['message'] = [
		[ "t", "Привет" ],
		[ "t", "Я просто хотел сказать, что ты реально очень крутой" ],
		[ "b", "Да!", "https://www.example.com" ]
	];
	$vars['footer'] = [
		[ "t", "от админа" ],
		[ "t", "с любовью" ]
	];

	email_send(
		"admin <admin@pixel27.ru>",
		"codeoon@mail.ru",
		$vars,
		"PHP/7.4.14",
		"none"
	);

	/*/
