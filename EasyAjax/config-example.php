<?php
	# Appearance settings
	$CONF_LOOK_DARK = True;

	# Federal system
	$CONF_UUID       = "00000000-0000-0000-0000-000000000000";
	$CONF_PROJECT    = "Coolest_project_name";
	$CONF_PROJECT_ID = 1;

	# Config emails
	$CONF_EMAIL_FROM = "Admin <admin@example.ru>";
	$CONF_EMAILS  = [
		"mail@example.com",
	];

	# Config DB
	$CONF_IP      = "localhost";
	$CONF_PORT    = "3306";
	$CONF_DB_WORK = "database";
	$CONF_USER    = "root";
	$CONF_PASS    = "root";

	# Forms settings
	$CONF_NAMES = [
		[ "id", "name",     "lastname", "email",       "age"        ],
		[ "id", "nickname", "game",     "description", "game_link"  ],
		[ "id", "name",     "phone",    "message"                   ]
	];
	$CONF_PLACEHOLDERS = [
		[ "0", "имя", "фамилия", "эл. почта", "возраст" ],
		[ "1", "ник", "игра",    "описание",  "ссылка"  ],
		[ "2", "имя", "телефон", "сообщение"            ]
	];
	$CONF_TYPES = [
		[ "id", [ "varchar", "r", 60 ], [ "varchar", "r", 60  ], [ "email", "r", 100   ], [ "int", "r", 0, 100 ] ],
		[ "id", [ "varchar", "r", 60 ], [ "varchar", "r", 100 ], [ "varchar", "",  200 ], [ "url", "r", 40     ] ],
		[ "id", [ "varchar", "r", 80 ], [ "phone", "r"        ], [ "text", "r", 4, 23  ]                         ]
	];

	# Form generator settings
	$CONF_GEN_FORM_CLASS        = "form";
	$CONF_GEN_LABEL_CLASS       = "label";
	$CONF_GEN_FIELD_ID_CLASS    = "id-field";
	$CONF_GEN_FIELD_TEXT_CLASS  = "text-field";
	$CONF_GEN_FIELD_NUM_CLASS   = "number-field";
	$CONF_GEN_FIELD_EMAIL_CLASS = "email-field";
	$CONF_GEN_FIELD_URL_CLASS   = "url-field";
	$CONF_GEN_FIELD_PHONE_CLASS = "phone-field";
	$CONF_GEN_TEXTAREA_CLASS    = "textarea-field";
