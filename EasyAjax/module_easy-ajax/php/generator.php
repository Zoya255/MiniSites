<link rel="stylesheet" href="../css/form.css">

<?php
	require "../config/config.php";

	/** @var $CONF_FIELDS */
	/** @var $CONF_NAMES  */

	for ($a = 0; $a < count($CONF_FIELDS); $a++) {
		print("<form class='form'>\n");

		for ($b = 0; $b < count($CONF_FIELDS[$a]); $b++) {
			if ($b == 0) {
				print("\t<input type='hidden' name='id' value='${a}'>\n\n");
			}
			else {
				$field = $CONF_FIELDS[$a][$b];
				$name  = $CONF_NAMES[$a][$b];

				print("\t<label>\n");
				print("\t\t${name}\n");
				print("\t\t<input type='text' name='${field}' placeholder='${name}'>\n");
				print("\t</label>\n\n");
			}

		}

		print("\t<input type='submit'>\n");

		print("</form>\n\n");
	}
