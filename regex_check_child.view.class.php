<?php

abstract class regex_check_child_view
{

	abstract public function get_regex_fieldset_item( $index , regex_check_child_model $model  );

/**
 * @method format_report() formats information generated regex::report()
 *	   and any feedback from adding/updating/deleting an archive
 *
 * @param array $report multi dimensional associative array containing
 *	  all info on regex processed
 *
 * @return string formatted contents of report (including archiver
 *	   feedback)
 */
	abstract public function format_report( regex_check_child_model $model );
}