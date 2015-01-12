<?php

class regex_check_child_model
{
	private $regex;
	private $find = '';
	private $replace = '';
	private $modifiers = '';
	private $modifiers_original = '';
	private $multiline = false;
	private $multiline_cb = '';
	private $errors = array('modifiers' => '');
	private $report = array();


	public function __construct( $find , $replace , $modifiers , $multiline )
	{
		if( !is_string($find) )
		{
			$this->errors[] = '$find is not a string';
		}
		if( !is_string($replace) )
		{
			$this->errors[] = '$replace is not a string';
		}
		$this->find = $find;
		$this->replace = $replace;

		if( is_string($modifiers) )
		{
			$this->modifiers_original = $modifiers;
			$modifiers = str_split($modifiers);
			for( $a = 0 ; $a < count($modifiers) ; $a += 1 )
			{
				switch( $modifiers[$a] )
				{
					case 'i':
					case 'm':
					case 's':
					case 'x':
					case 'e':
					case 'A':
					case 'D':
					case 'S':
					case 'U':
					case 'X':
					case 'u':
						$this->modifiers .= $modifiers[$a];
						break;
					default:
						$this->errors['modifiers'] .= "\"{$modifiers[$a]}\" is not a valid modifier. ";
				}
			}
		}
		if( is_bool($multiline) )
		{
			$this->multiline = $multiline;
		}

		$this->regex = regex_replace::process( $this->get_regex() , $replace );
	}



	public function get_multiline( $checkbox_state = false)
	{
		if( $checkbox_state !== true )
		{
			return $this->multiline;
		}
		{
			return 'checked="checked" ';
		}
	}

	public function is_regex_valid()
	{
		return $this->regex->is_valid();
	}
	public function get_regex()
	{
		return "`{$this->find}`{$this->modifiers}";
	}

	public function get_find()
	{
		return $this->find;
	}

	public function get_replace()
	{
		return $this->replace;
	}

	public function get_modifiers( $original = true )
	{
		if( $original !== false )
		{
			return $this->modifiers_original;
		}
		else
		{
			return $this->modifiers;
		}
	}

	public function process( $sample )
	{
		$this->report = $this->regex->report($sample);
		return $this->regex->get_output($sample);
	}

	public function get_errors()
	{

	}

	public function get_report()
	{
		return $this->report;
	}
}