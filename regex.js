"use strict";

/*
$('#regex .nav-tabs a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
});
*/


function getOl( parentObj ) {
	var output = parentObj.getElementsByTagName('ol');
	return output[0];
}


function getLabel( parentObj ) {
	var output = parentObj.getElementsByTagName('p');
	output = output[0].getElementsByTagName('label');
	return output[1];
}

function getParent( ojb , elementName ) {
	var parentObj;
	if( obj.parent != undefined ) {
		parentObj = obj.parent;
		if( parentObj.tagName == elementName ) {
			return parentObj;	
		} else {
			return getParent( parentobj , elementName );
		}
	}
	else {
		return false;
	}

}

function textareaClick( ){
	var parentObj = getParent( this , 'li' );
	var inputs = parentObj.getElementsByTagName('input');
	var textareas;
	var fields = [];

	var newField;
	var inputVal = '';
	var inputId = '';
	var inputClass = '';
	var fieldType = '';
	var tmpParent;

	if( inputs.length === 3 ) {
		fieldType = 'textarea';
		for( a = 0 ; a < 2 ; a += 1) {
			fields[a] = inputs[a];
		}
	} else {
		fieldType = 'input';
		textareas = parentObj.getElementsByTagName('textarea');
		for( a = 0 ; a < 2 ; a += 1) {
			fields[a] = textareas[a];
		}
	}

	parentObj.classList.toggle('has-textarea');

	for( a = 0 ; a < 2 ; a += 1 ) {
		inputVal = fields[a].value;
		inputId = fields[a].getAttribute('name');
		inputClass = fields[a].getAttribute('class');
				
		newField = document.createElement(fieldType);
		newField.setAttribute('name',inputId);
		newField.setAttribute('id',inputId);
		newField.setAttribute('class',inputClass);
		newField.value = inputVal;
		
		tmpParent = fields[a].parentElement;
		tmpParent.appendChild(newField);
		tmpParent.removeChild(fields[a]);
	}
	return true;
}

//function regexPairAdd() {


//function regexPairRemove() {};

function byLinePrep( input ) {
	return input;
}

function testRegex() {
	var output = '';

}

function testRegexByLine() {
	byLinePrep(input);

}

function replaceRegex() {

}

function replaceRegexByLine() {
	byLinePrep(input);

}






$(document).ready(function(){

	/**
	 * @function regexPairAdd() appends a list item to the <OL> list of Find/Replace pairs.
	 *		it has the following HTML:
	 *		<li id="regexp0" class="regexPair row">
	 *			<span class="input col-sm-6 col-xs-12">
	 *				<label for="find0">Find <span>1</span></label>
	 *				<input type="text" name="find[]" id="find0" value="" class="find form-control" />
	 *			</span>
	 *			<span class="input col-sm-6 col-xs-12">
	 *				<label for="replace0">Replace <span>1</span></label>
	 *				<input type="text" name="replace[]" id="replace0" value="" class="replace form-control" />
	 *			</span>
	 *			<span class="col-xs-12 checkbox-check">
	 *				<label for="textarea0">
	 *					<input type="checkbox" name="textarea0" id="textarea0" value="textarea" title="Make Find 1 and Replace 1 multi line" />
	 *					Multi line
	 *				</label>
	 *			</span>
	 *		</li>
	 *
	 *		It also adds an onchange event to the checkbox field
	 */
	$('#add_regex_pair').click(function(){	// wrapping tag for the list of regex inputs
		this.preventDefault();
		console.log('inside $(#add_regex_pair)');
/*
		var wrapper = document.getElementById('regexes');

		// list of regex items containing regex inputs
		var ol = getOl( wrapper );

		// the remove button for removing regex pairs.
		var remover = getLabel( wrapper );

		// all the list items containing regex pairs.
		var LIs = ol.getElementsByTagName('li');

		// the ID to be used for the about to be inserted regex pair
		var id = LIs.length;

		// the human readable ID for the about to be inserted regex pair
		var b = id + 1;

		// the ID of the last regex pair currently in the list.
		var c = id - 1;

		// the wrapper for the about to be inserted regex pair
		var newLi = document.createElement('li');
		newLi.setAttribute('id','regexp'+id);
		newLi.setAttribute('class','additional row');

		// the tree wrappers for the input items
		var newSpan = [];
		// the three labels for the input items
		var newLabel = [];
		// the three input items them selves.
		var newInput = [];

		// the type of input field (intended to be swappable with textarea - not sure how to implement yet)
		var fieldTXT = 'input'

		// the name/id attribute value prefix
		var nameTXT = 'find';

		// the label text prefix
		var labelTXT = 'Find';

		// all the input fields within the list item
		var tmpInputs = LIs[c].getElementsByTagName('input');

		if( tmpInputs.length == 1 ) {
			// if the last find/replace pair has only one list item,
			// then it must already have textarea's so the fields
			// must be textareas
			fieldTXT = 'textarea';
		}

		// looping through to create all the nodes for the find and
		// replace fields
		for( a = 0 ; a < 2 ; a += 1 ) {

			// create wrapper for the field and set attributes
			newSpan[a] = document.createElement( 'span' );
			newSpan[a].setAttribute( 'class' , 'input col-sm-6 col-xs-12' );

			// create label for the field and set its attributes.
			newLabel[a] = document.createElement( 'label' );
			newLabel[a].setAttribute( 'for' , nameTXT + id );
			newLabel[a].setAttribute( 'class' , 'hiding' );
			newLabel[a].innerHTML = labelTXT + ' <span>' + b + '</span>';

			// create the field itself
			newInput[a] = document.createElement( fieldTXT );
			newInput[a].setAttribute( 'type' , 'text' );
			newInput[a].setAttribute( 'name' , nameTXT + id );
			newInput[a].setAttribute( 'id' , nameTXT + id );
			newInput[a].setAttribute( 'value' , '');
			newInput[a].setAttribute( 'class' , nameTXT + ' form-control' );

			// add the label and field to the wrapper
			newSpan[a].appendChild(newLabel[a]);
			newSpan[a].appendChild(newInput[a]);

			// add the wrapper to the parent li
			newLi.appendChild(newSpan[a]);

			// change the name/id of for the next field
			nameTXT = 'replace';
			labelTXT = 'Replace';
		}

		// create the checkbox for the new find/replace pair and set its attributes
		newSpan[2] = document.createElement( 'span' );
		newSpan[2].setAttribute('class','col-xs-12 checkbox-check');

		// create the label for the checkbox and set its attributes
		newLabel[2] = document.createElement( 'label' );
		newLabel[2].setAttribute( 'for' , 'textarea' + id );

		// create the checkbox input field and set its attributes.
		newInput[2] = document.createElement( 'input' );
		newInput[2].setAttribute( 'type' , 'checkbox' );
		newInput[2].setAttribute( 'name' , 'textarea' + id );
		newInput[2].setAttribute( 'id' , 'textarea' + id );
		newInput[2].setAttribute( 'title' , 'Make Find ' + b + ' and Replace ' + b + ' multi line' );

		// set the onclick event function for the checkbox.
		newInput[2].onchange = function() {
			textareaClick( newLi );
		}

		// set the checkbox to true if the new find/replace pair are textareas
		if( tmpInputs.length == 1 ) {
			newInput[2].checked = true;
		}

		//
		newLabel[2].appendChild( newInput[2] );
		newLabel[2].appendChild( document.createTextNode(' Multi line') );
		newSpan[2].appendChild( newLabel[2] );

		newLi.appendChild( newSpan[2] );

		ol.appendChild( newLi );

		if( id == 1 ) {
			remover.classList.toggle( 'hiding' );
		}

		return false;
*/
	});

	$('#remove_regex_pair').click(function() {
/*		var wrapper = document.getElementById('regexes');
		var ol = getOl( wrapper );
		var remover = getLabel( wrapper );
		var LIs = ol.getElementsByTagName('li');
		var id = LIs.length;
		var b = id - 1;

		if( id == 2 ) {
			remover.classList.toggle('hiding');
		}
		ol.removeChild( LIs[b] );

		return false;
*/
	});


	$('#submitTest').click(function() {
		testRegex( );
		return false;
	});

	$('#submitTestByLine').click(function() {
		testRegexByLine( );
		return false;
	});

	$('#submitReplace').click(function() {
		submitReplace( );
		return false;
	});

	$('#submitReplaceByLine').click(function() {
		replaceRegexByLine( );
		return false;
	});

	$('#textarea0').click(function() {
		textareaClick();
	});

});
