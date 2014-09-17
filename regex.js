
addNewRegexPairHTML = function ( a ) {
	sep = "\n\n\t\t\t\t\t";
	newRegExpPair	= sep + '<li id="regexp' + id + '">'
			+ sep + "\t" + '<span>'
			+ sep + "\t\t" + '<label for="find' + id + '">Find <span>' + id + '</span></label>'
//			+ sep + "\t\t" + '<input type="text" name="find' + id + '" id="find' + id + '" value="" class="find" />'
			+ sep + "\t\t" + '<input type="text" name="find[]" id="find' + id + '" value="" class="find" />'
			+ sep + "\t" + '</span>'
			+ sep + "\t" + '<span>'
			+ sep + "\t\t" + '<label for="replace' + id + '">replace <span>' + id + '</span></label>'
//			+ sep + "\t\t" + '<input type="text" name="replace' + id + '" id="replace' + id + '" value="" class="replace" />'
			+ sep + "\t\t" + '<input type="text" name="replace[]" id="replace' + id + '" value="" class="replace" />'
			+ sep + "\t" + '</span>'
			+ sep + "\t" + '<span>'
			+ sep + "\t\t" + '<label for="textarea' + id + '">
			+ sep + "\t\t\t" + '<input type="checkbox" name="textarea' + id + '" id="textarea' + id + '" value="textarea" title="Make Find ' + id + ' and Replace ' + id + ' multi line" />'
			+ sep + "\t\t\t" + 'Multi line'
			+ sep + "\t\t" + '</label>'
			+ sep + "\t" + '</span>'
			+ sep + "\t" + '<div class="results"></div>'
			+ sep + '</li>';
	return newRegExpPair;
}

function ucFirst( input )
{
	var ch = input[0].toUpperCase();
	for( a = 1 ; a < input.length ; a += 1 ) {
		ch += input[a];
	}
	return ch;
}

addNewRegexPairNode = function ( id ) {

	var bits = [ 'find' , 'replace' ];

	var wrapper;
	var span;
	var label;
	var label_span;
	var input;
	var sep = '';

	wrapper = document.createElement('li');
	wrapper.setAttribute('id' , 'regexp' + id );
	wrapper.setAttribute('class' , 'regexPair' );

	bits

	for( b = 0 ; b < 2 ; b += 1 ) {
		span = document.createElement('span');
		label = document.createElement('label');
		label.setAttribute( 'for' , bits[b] + id )
		label.innerHTML = sep + ucFirst( bits[b] ) + ' ';

		label_span = document.createElement('span');
		label_span.innerHTML = id;

		label.appendChild( label_span );

		input = document.createElement('input');
		input.setAttribute( 'type' , 'text' );
		input.setAttribute( 'name' , bits[b] + id );
		input.setAttribute( 'id' , bits[b] + id );
		input.setAttribute( 'value' , '' );
		input.setAttribute( 'class' , bits[b] );

		span.appendChild( label );
		span.appendChild( input );

		wrapper.appendChild( span );
		sep = ' ';
	}
	return wrapper;
}


var more = document.getElementById('add_regex_pair');
//more.onClick(

/*
console.log( 'This is an element of type: ' , more.nodeType );
console.log( 'The inner HTML is ' , more.innerHTML );
console.log( 'Child nodes: ' , more.childNodes.length );

var moreParent = more.parentNode;
var wrapper = moreParent.parentNode;
console.log( 'wrapper contains: ', wrapper.innerHTML );
console.log( 'parent name: ',wrapper.id );

var ol = wrapper.getElementsByTagName('ol');
console.log( 'wrapper ordered list items: ',ol[0].innerHTML );
*/
/*
var newRegExpPair = '';
for( a = regExpCount + 1 ; a < 5 ; a += 1 ) {
	newRegExpPair += addNewRegexPairHTML( a );
}

console.log( 'new children of ol' , newRegExpPair );
ol[0].innerHTML = ol[0] + newRegExpPair;
*/

/*
var counter = regExpCount;
for( counter = regExpCount ; counter < 9 ; counter += 1 ) {
//	ol[0].appendChild( addNewRegexPairNode( counter ) );
}
*/
more.onclick = function(){
	var wrapper = document.getElementById('regexes');
	var ol = wrapper.getElementsByTagName('ol');
	var id;
	var LIs;
	ol = ol[0];

	LIs = ol.getElementsByTagName('li');
	id = LIs.length;
	console.log( 'Current pair count = ',id);
	sep = "\n\n\t\t\t\t\t";
	newRegExpPair	= sep + '<li id="regexp' + id + '">'
			+ sep + "\t" + '<span>'
			+ sep + "\t\t" + '<label for="find' + id + '">Find <span>' + id + '</span></label>'
			+ sep + "\t\t" + '<input type="text" name="find' + id + '" id="find' + id + '" value="" class="find" />'
			+ sep + "\t" + '</span>'
			+ sep + "\t" + '<span>'
			+ sep + "\t\t" + '<label for="replace">replace <span>' + id + '</span></label>'
			+ sep + "\t\t" + '<input type="text" name="replace' + id + '" id="replace' + id + '" value="" class="replace" />'
			+ sep + "\t" + '</span>'
			+ sep + "\t" + '<div class="results"></div>'
			+ sep + '</li>';
	alert();
	ol.innerHTML += newRegExpPair;
	console.log( 'regex pairs: ', ol.innerHTML );
	alert('added new regexp pair');
};
