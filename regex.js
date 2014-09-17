
var more = document.getElementById('add_regex_pair');
var less = document.getElementById('remove_regex_pair');


function getOl( parentObj ) {
	var output = parentObj.getElementsByTagName('ol');
	return output[0];
}
function getLabel( parentObj ) {
	var output = parentObj.getElementsByTagName('p');
	output = output[0].getElementsByTagName('label');
	return output[1];
}


regexPairAdd = function() {
	var wrapper = document.getElementById('regexes');
	var ol = getOl( wrapper );
	var remover = getLabel( wrapper );
	var LIs = null;
	var id = 0;
	var b = 0;

	LIs = ol.getElementsByTagName('li');
	id = LIs.length;
	b = id + 1;

	console.log( 'id = ' + id  + "\nb = " + b );
	sep = "\n\n\t\t\t\t\t";

	ol.innerHTML   += sep + '<li id="regexp' + id + '">'
			+ sep + "\t" + '<span>'
			+ sep + "\t\t" + '<label for="find' + id + '">Find <span>' + b + '</span></label>'
			+ sep + "\t\t" + '<input type="text" name="find' + id + '" id="find' + id + '" value="" class="find" />'
			+ sep + "\t" + '</span>'
			+ sep + "\t" + '<span>'
			+ sep + "\t\t" + '<label for="replace">Replace <span>' + id + '</span></label>'
			+ sep + "\t\t" + '<input type="text" name="replace' + id + '" id="replace' + b + '" value="" class="replace" />'
			+ sep + "\t" + '</span>'
			+ sep + "\t" + '<span>'
			+ sep + "\t\t" + '<label for="textarea' + id + '">'
			+ sep + "\t\t\t" + '<input type="checkbox" name="textarea' + id + '" id="textarea' + b + '" value="textarea" title="Make Find ' + b + ' and Replace ' + b + ' multi line"  />'
			+ sep + "\t\t\t" + 'Multi line'
			+ sep + "\t\t" + '</label>'
			+ sep + "\t" + '</span>'
			+ sep + '</li>';


	if( id == 1 ) {
		remover.removeAttribute( 'class' );
	}

	return false;
};


regexPairRemove = function() {
	var wrapper = document.getElementById('regexes');
	var ol = getOl( wrapper );
	var remover = getLabel( wrapper );
	var LIs = null;
	var id = 0;
	var b = 0;
	var removeLabel = null;

	LIs = ol.getElementsByTagName('li');
	id = LIs.length;
	b = id - 1;

	if( id > 1 ) {
		if( id == 2 ) {
			remover.setAttribute('class','hidden');
		}
		ol.removeChild( LIs[b] );
	}
	return false;
};



more.onclick = function() {
	regexPairAdd( );
	return false;
};

less.onclick  = function() {
	regexPairRemove( );
	return false;
}
