<?php
	/*/
	/ / Это скрипт-инструмент для генерации формы согласно настройкам config.php
	/ / Создаёт в цикле HTML-код формы или нескольких форм сразу
	/ / Итоговые формы полностью валидные и готовы к использованию в данном модуле
	/*/


	/** @var $CONF_LOOK_DARK */

	/** @var $CONF_NAMES        */
	/** @var $CONF_PLACEHOLDERS */
	/** @var $CONF_TYPES        */

	/** @var $CONF_GEN_FORM_CLASS  */
	/** @var $CONF_GEN_LABEL_CLASS */

	/** @var $CONF_GEN_FIELD_ID_CLASS    */
	/** @var $CONF_GEN_FIELD_TEXT_CLASS  */
	/** @var $CONF_GEN_FIELD_NUM_CLASS   */
	/** @var $CONF_GEN_FIELD_EMAIL_CLASS */
	/** @var $CONF_GEN_FIELD_URL_CLASS   */
	/** @var $CONF_GEN_FIELD_PHONE_CLASS */

	/** @var $CONF_GEN_TEXTAREA_CLASS */

	require "../../../config.php";


	if ($CONF_LOOK_DARK) {
		print('<link rel="stylesheet" href="../../css/src/dark.css">');
	}

	for ($a = 0; $a < count($CONF_NAMES); $a++) {
		print("<form class='${CONF_GEN_FORM_CLASS}'>\n");

		for ($b = 0; $b < count($CONF_NAMES[$a]); $b++) {

			if ($b == 0) {
				print("\t<input type='hidden' class='${CONF_GEN_FIELD_ID_CLASS}' name='id' value='${a}'>\n\n");
			}
			else {
				$name        = $CONF_NAMES[$a][$b];
				$placeholder = $CONF_PLACEHOLDERS[$a][$b];
				$type        = $CONF_TYPES[$a][$b];

				print("\t<label class='${CONF_GEN_LABEL_CLASS}'>\n");
				print("\t\t${placeholder}\n");

				if ( $type[0] == "text" ) {

					print( "\t\t<textarea name='${name}' class='${CONF_GEN_TEXTAREA_CLASS}' rows=${type[2]} cols=${type[3]} " );

					if ( $type[1] == "r" ) {
						print( "required" );
					}

					print( ">${placeholder}</textarea>\n" );

				}
				else {

					print( "\t\t<input " );

					if ( $type[0] == "varchar" ) {
						print( "type='text' name='${name}' class='${CONF_GEN_FIELD_TEXT_CLASS}'
								placeholder='${placeholder}' maxlength=${type[2]} " );
					}
					elseif ( $type[0] == "int" ) {
						print( "type='number' name='${name}' class='${CONF_GEN_FIELD_NUM_CLASS}'
								placeholder='${placeholder}' min=${type[2]} max=${type[3]} " );
					}
					elseif ( $type[0] == "email" ) {
						print( "type='email' name='${name}' class='${CONF_GEN_FIELD_EMAIL_CLASS}'
								placeholder='${placeholder}' maxlength=${type[2]} " );
					}
					elseif ( $type[0] == "url" ) {
						print( "type='url' name='${name}' class='${CONF_GEN_FIELD_URL_CLASS}'
								placeholder='${placeholder}' maxlength=${type[2]} " );
					}
					elseif ( $type[0] == "phone" ) {
						print( "type='tel' name='${name}' class='${CONF_GEN_FIELD_PHONE_CLASS}'
								placeholder='${placeholder}' " );
					}
					else {
						print( "type='text' name='${name}' " );
					}

					if ( $type[1] == "r" ) {
						print( "required " );
					}

					print( ">\n" );

				}

				print("\t</label>\n\n");
			}

		}

		print("\t<input type='submit'>\n");

		print("</form>\n\n");
	}
