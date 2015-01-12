<?php



class regex_check_parent_view_html extends regex_check_parent_view
{
	public function get_output()
	{
		$results = '';
		$pairs = '';
		$extra_tabs = '';
		$output = '';
		$regexes = $this->model->get_regexes();
		if( $this->model->is_dummy() )
		{
			$pairs .= $this->child_view->get_regex_fieldset_item(0,$regexes[0]);
		}
		else
		{
			for( $a = 0 ; $a < count($regexes) ; $a += 1 )
			{
				$pairs .= $this->child_view->get_regex_fieldset_item($a,$regexes[$a]);
				$results .= $this->child_view->format_report($regexes[$a]);
			}
			if( $results !== '' )
			{
				$extra_tabs .= '
				<li><a href="#results" data-toggle="tab" id="results-tab">Results</a></li>';
				$results = '
				<fieldset id="results" class="tab-pane fade">
					<legend>Results</legend>
					<ol>'.$results.'
					</ol>
				</fieldset>
';
			}

		if( $this->model->is_test_only() === false && $this->model->is_output_different() )
		{
			$extra_tabs .= '
				<li><a href="#output" data-toggle="tab" id="output-tab">Output</a></li>';
		$output = '
				<fieldset id="output" class="hiding tab-pane fade">
					<legend>Replacement</legend>
					<textarea id="replace" name="replace">'.htmlentities($this->model->get_output()).'</textarea>
				</fieldset>
';
	}
		}

		$find = array(
			 '{{REQUEST_URI}}' // => $this->model->get_uri()
			,'{{PAIRS}}' // => $pairs
			,'{{RESULTS}}' // => $results
			,'{{EXTRA_TABS}}' // => $extra_tabs
			,'{{SAMPLE}}' // => $this->model->get_output()
			,'{{OUTPUT}}'
		);

		$replace = array(
			 $this->model->get_uri() // 'REQUEST_URI'
			,$pairs // 'PAIRS'
			,$results // 'RESULTS'
			,$extra_tabs // 'EXTRA_TABS'
			,$this->model->get_output() // 'SAMPLE'
			,$output
		);

		return str_replace( $find , $replace , file_get_contents('regex_check_template.html') );
	}
}