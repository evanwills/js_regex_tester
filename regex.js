"use strict";

function checkModifiersOk() {

}

function makeMultiLine() {

}

function testRegex() {

}

function setActiveTab( whichTab ) {

}

function showOutput() {

}

function getParent( el , tagname ) {
	if( el.tagName == tagname ) {
		return el;
	} else {
		el = el.parentNode;
		if( el == undefined ) {
			return false;
		} else {
			return getParent( el , tagname );
		}
	}
}
/**
 * @function convertFieldX() converts a field from input to textarea (or vice versa )
 *
 * @var integer fieldIdIndex the numeric suffix of the find/replace input ID
 *
 * @var string fieldType which field type should be used
 *	(textarea|input[text])
 */
function convertFieldX( fieldIdIndex , fieldType ) {
	if( typeof fieldIdIndex != 'number' || fieldIdIndex < 0 ) {
		return false;
	}
	if( typeof fieldType != 'string' || ( fieldType != 'input' && fieldType != 'textarea' ) ) {
		return false;
	}
	/**
	 * @var Element oldField The variable that will hold the old
	 *	Find/Replace textarea/input field
	 */
	var oldField;
	/**
	 * @var Element newField The variable that will hold the new
	 *	Find/Replace textarea/input field
	 */
	var newField;

	/**
	 * @var Element tmpParent The wrapper element object for the
	 *	field
	 */
	var tmpParent;

	/**
	 * @var array fieldId List of IDs of fields to be replaced.
	 */
	var fieldId = [ 'find' + fieldIdIndex , 'replace' + fieldIdIndex ];

	/**
	 * @var array attr List of attributes that need to be passed
	 *	from oldField to newField
	 */
	var attr = [ 'name' , 'class' , 'placeholder' ];

	/**
	 * @var integer a Index for top level FOR loop
	 */
	var a = 0;

	/**
	 * @var integer b Index for second level FOR loop
	 */
	var b = 0;
	for( a = 0 ; a < 2 ; a += 1 ) {
		// get the old element to be replaced
		oldField = document.getElementById(fieldId[a]);
		if( oldField != null ) {
			// Ffew !!! the old element exists
			if( oldField.tagName != fieldType ) {
				// We need to change the old element to the new type

				// create the new field and add the old field's
				// attributes
				newField = document.createElement(fieldType);

				// set the ID for the new field
				newField.setAttribute( 'id' , fieldId[a] );

				// set the other attributes for the new field
				for( b = 0 ; b < 3 ; b += 1 ){
					newField.setAttribute( attr[b] , oldField.getAttribute(attr[b]) );	
				}

				// set the value for the new field
				newField.value = oldField.value;


				// Get the old field's parent wrapper put the new
				// field into it. Then remove the old field
				tmpParent = oldField.parentElement;
				tmpParent.appendChild(newField);
				tmpParent.removeChild(oldField);
			}
		}
	}
}

$('document').ready(function(){
	$('#regexp0 .checkbox-check :text').blur( checkModifiersOk() );

	$('#regexp0 .checkbox-check :checkbox').click(function(){

		var idIndex = $(this).attr('id');
		var i = idIndex.length - 1;
		idIndex = idIndex[i] / 1;

		if( $(this).is(':checked') === true ) {
			if( !$('#regexp' + idIndex).hasClass('has-textarea') ) {
				$('#regexp' + idIndex).addClass('has-textarea');
			}
			convertFieldX( idIndex , 'textarea' );
		} else {
			$('#regexp' + idIndex).removeClass('has-textarea');
			convertFieldX( idIndex , 'input' );
		}

	});

	$('#submitTest').click(function(){
		$('#sample').testRegex();
		setActiveTab(2);
		return false;
	});

	$('#submitReplace').click(function(){
		$('#sample').testRegex().showOutput();
		return false;
	});

	/**
	 * @function add_regex_pair() creates a new regex Find/Replace pair.
	 */
	$('#add_regex_pair').click(function(){

		// clone the last regex pair.
		$('.regexes li:last').clone(true,true).appendTo('.regexes');

		// update the all the bits to make it look like a new pair

		/**
		 * @var integer i The number of regex pairs now.
		 */
		var i = $('.regexes li').length;

		/**
		 * @var integer h The number of regex pairs before now
		 */
		var h = i - 1;

		/**
		 * @var integer g The index of the previous (or first) regex pair
		 */
		var g = h - 1;

		/**
		 * @var array attrs The list of attribute names that need to be updated
		 */
		var attrs = [ 'for' , 'id' , 'name' , 'title' , 'placeholder' ];

		/**
		 * @var integer a The index of items in the attrs array
		 */
		var a = 0;

		/**
		 * @var string oldAttr The origina value of the attribute
		 */
		var oldAttr = '';

		/**
		 * @var RegExp reg The regular expression used to update the attribute value
		 */
		var reg = new RegExp( g , 'g' );



		// update the ID of the <LI> wrapper for the regex pair
		$('.regexes li:last').attr( 'id' , 'regexp' + h );
		if( !$('.regexes li:last').hasClass('additional') ) {
			// add the "additional" class to the <LI>
			$('.regexes li:last').addClass('additional');
		}

		// loop through the attributes
		for( a = 0 ; a < attrs.length ; a += 1 ) {
			
			// loop through each Element that has this attribute
			$('.regexes li:last [' + attrs[a] + ']').each( function() {
				// extract the attribute value
				oldAttr = $(this).attr(attrs[a]);

				// check if the attribute needs to be updated
				if( oldAttr.indexOf(g) >= 0 ) {
					// change the attribute value then update the elment
					$( this ).attr( attrs[a] , oldAttr.replace( reg , h ) );
				}
			});

			if( attrs[a] == 'name' ) {
				// All the attributes from here on, are visable to
				// the viewer start numbering from 1 instead of 0
				// used for arrays
				reg = new RegExp( h , 'g' );
				// shift the value up 1
				g += 1;
				h += 1;
			}
		}
		// update the span values within the find/replace labels
		$('.regexes li:last label span').each( function(){
			$(this).text(h);
		});

		// remove the hiding class from the "Remove" button
		$('label[for=remove_regex_pair]').removeClass('hiding');

		return false;
	});

	$('#remove_regex_pair').click(function(){

		var liCount = $('.regexes li').length;
		if( liCount > 1 ){
			$('.regexes li:last').remove();
			if( liCount == 2 ) {
				if( ! $('label[for=remove_regex_pair]').hasClass('hiding') ) {
					$('label[for=remove_regex_pair]').addClass('hiding');
				}
				$('#add_regex_pair').focus();
			} else {
				$('#remove_regex_pair').focus();
			}
		}
		return false;
	});
});