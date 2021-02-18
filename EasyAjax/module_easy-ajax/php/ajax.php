<?php
	/** @var $CONF_PROJECT      */
	/** @var $CONF_NAMES        */
	/** @var $CONF_PLACEHOLDERS */
	/** @var $CONF_EMAIL_FROM   */
	/** @var $CONF_EMAILS       */

	require "../../config.php";
	require "lib/data.php";
	require "lib/mail.php";
	require "db.php";

	print( list_data( $_POST, $CONF_NAMES, $CONF_PLACEHOLDERS ) );

	$id = $_POST['id'];

	$row = R::dispense( mb_strtolower( $CONF_PROJECT ."id". $id ) );

	for ( $i = 1; $i < count( $CONF_NAMES[$id] ); $i++ ) {
		$row[ $CONF_NAMES[$id][$i] ] = $_POST[ $CONF_NAMES[$id][$i] ];
	}

	$row_id = R::store($row);


	$vars = [];

	$vars['title']     = "Info | Уведомление";
	$vars['preheader'] = "Уведомление о новом сообщении | ";
	$vars['message']   = [
		[ 't', 'Здравствуйте!' ],
		[ 't', 'На сайте example.com вам поступо новое обращение' ],
		[ 't', 'Подробная информация:' ],
		[ 't', list_data( $_POST, $CONF_NAMES, $CONF_PLACEHOLDERS ) ],
		[ 'b', 'Посмотреть на сайте', 'https://example.com/EasyAjax/module_easy-ajax/php/info.php?id='.
									   $row_id.'&table='.mb_strtolower( $CONF_PROJECT ."id". $id ) ],
		[ 't', 'Это автоматическое сообщение, на не нужно отвечать' ],
		[ 't', 'Удачи!' ]
	];
	$vars['footer']    = [
		[ 't', 'Sincerely from Develop' ],
		[ 't', 'Created by Codeoon' ]
	];

	foreach ($CONF_EMAILS as $email) {
		email_send( $CONF_EMAIL_FROM, $email, $vars );
	}
