<?php

class regex_check_parent_model
{
	protected $parent_view_class = 'regex_check_parent_view_html';
	protected $child_view_class = 'regex_check_child_view_html';
	protected $sample = '';
	protected $ws_trim = false;
	protected $ws_action_after = true;
	protected $regex = array();
	protected $output = '';
	protected $output_is_different = false;
	protected $test_only = true;
	protected $dummy = true;
	protected $request_url = '';

	public function __construct()
	{

		if( isset($_POST) )
		{
			$this->dummy = false;
			$this->sample = isset($_POST['sample'])?$_POST['sample']:"This is a line of text\nThis is another line\nand this is not the last line\nbut the last line will be empty.";
			$this->ws_trim = isset($_POST['ws_trim'])?true:false;
			if( isset($_POST['ws_action']) && $_POST['ws_action'] == 'before' )
			{
				$this->ws_action_after = false;
			}
			if( isset( $_POST['regex'] ) && is_array($_POST['regex']) && !empty($_POST['regex']) )
			{
				$output = $this->sample;
				for( $a = 0 ; $a < count($_POST['regex']) ; $a += 1 )
				{
					$find = isset($_POST['regex'][$a]['find'])?$_POST['regex'][$a]['find']:'';
					$replace = isset($_POST['regex'][$a]['replace'])?$_POST['regex'][$a]['replace']:'';
					$modifiers = isset($_POST['regex'][$a]['modifiers'])?$_POST['regex'][$a]['modifiers']:'';
					$makeTextarea = isset($_POST['regex'][$a]['makeTextarea'])?true:false;
					$tmp = new regex_check_child_model( $find , $replace , $modifiers , $makeTextarea );
					$output = $tmp->process($output);
					$this->regex[] = $tmp;
				}
				if( $this->sample !== $output )
				{
					$this->output = $output;
					$this->output_is_different = true;
				}
			}
			else
			{
				$this->regex[] = new regex_check_child_model('','','',false,false);
			}
			if( isset($_POST['submit_replace']) )
			{
				$this->test_only = false;
			}
			$this->request_uri = $_SERVER['REQUEST_URI'];
		}
	}


	public function get_regexes()
	{
		return $this->regex;
	}

	public function is_dummy()
	{
		return $this->dummy;
	}

	public function is_test_only()
	{
		return $this->test_only;
	}

	public function is_output_different()
	{
		return $this->output_is_different;
	}

	public function get_output()
	{
		return $this->output;
	}

	public function get_uri()
	{
		return $this->request_uri;
	}
}