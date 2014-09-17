
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
	var LIs = ol.getElementsByTagName('li');
	var id = LIs.length;
	var b = id + 1;

	sep = "\n\n\t\t\t\t\t";

	ol.innerHTML   += sep + '<li id="regexp' + id + '" class="additional">'
			+ sep + "\t" + '<span class="input">'
			+ sep + "\t\t" + '<label for="find' + id + '" class="hidden">Find <span>' + b + '</span></label>'
			+ sep + "\t\t" + '<input type="text" name="find' + id + '" id="find' + id + '" value="" class="find" />'
			+ sep + "\t" + '</span>'
			+ sep + "\t" + '<span class="input">'
			+ sep + "\t\t" + '<label for="replace' + id + '" class="hidden">Replace <span>' + id + '</span></label>'
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
	var LIs = ol.getElementsByTagName('li');
	var id = LIs.length;
	var b = id - 1;

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

less.onclick = function() {
	regexPairRemove( );
	return false;
}
