
var more = document.getElementById('add_regex_pair');
var less;

addRemove = function ( action ) {
	console.log( 'action = ' + action );
	var wrapper = document.getElementById('regexes');
	var ol = wrapper.getElementsByTagName('ol');
	var p = wrapper.getElementsByTagName('p');
	var LIs;
	var id;
	var a;
	var b;
	var buttons;
	var labels;

	ol = ol[0];
	p = p[0];

	LIs = ol.getElementsByTagName('li');
	id = LIs.length;

	if ( action == 'add' )
	{
		doit = function() {
			console.log('add');
			b = id + 1;console.log( 'id = ' + id  + "\nb = " + b );
			sep = "\n\n\t\t\t\t\t";
			newFindReplacePair = sep + '<li id="regexp' + id + '">'
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

			ol.innerHTML += newFindReplacePair;
			if( id == 1 ) {
				p.innerHTML    += sep + '<button id="remove_regex_pair">Remove</button>'
						+ sep + '<label for="remove_regex_pair"><span>Remove</span> the last Find/Replace pair</label>';
						
				less = document.getElementById('remove_regex_pair');
				less.onclick = function() {
					addRemove( 'remove' );
					return false;
				}
			}
		};
	}
	else( action == 'remove' )
	{
		doit = function() {
			console.log('remove');
			b = id - 1;
			console.log( "line: 64\nid = " + id + "\nb = " + b + "\nid > 1 = " + ( id > 1 ) );
			if( id > 1 ) {
				console.log( 'we can try and remove something' );
				if( id == 2 ) {
					conslol.log( 'we can try and remove the "Remove" button' );
				alert();
					button = p.getElementsByTagName('button');
					label  = p.getElementsByTagName('label');
					console.log( 'attempting to remove less.onclick event' );
					less.onclick = false;

//					p.removeChild( button[1] );
					console.log( 'we removed the "Remove" button' );	
//					p.removeChild( label[1] );
					console.log( 'we removed the "Remove" label' );	
				}
				ol.removeChild( LIs[b] );
				console.log( 'removed last Find/Replace' );
			}
			console.log( 'removed last Find/Replace pair and "Remove" button' );
		};
	}
	doit();
	return false;
};

more.onclick = function() {
	addRemove( 'add' );
	return false;
};


