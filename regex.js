
var more = document.getElementById('add_regex_pair');
var less;


var regexPair = regexPair || {};

regexPair.doit = {
	more: null,
	less: null,

	wrapper: null,
	ol: null,
	p: null,
	LIs: null,
	id: 0,
	a: 0,
	b: 0,
	buttons: null,
	initialised = false,

	_initialise: function() {
		if( this.initialised === false ) {
			this.initialised = true;
			this.wrapper = document.getElementById('regexes');
			this.ol = wrapper.getElementsByTagName('ol');
			this.p = wrapper.getElementsByTagName('p');

			this.ol = ol[0];
			this.p = p[0];

			this.LIs = ol.getElementsByTagName('li');
			this.id = LIs.length;
			this.b = this.id;
		}
	},

	regexPairAdd: function( more , less ) {
		console.log('add');

		this.more = more;
		this.less = less;

		this._initialise();
		this.b += 1;console.log( 'id = ' + this.id  + "\nb = " + this.b );
		sep = "\n\n\t\t\t\t\t";

		this.ol.innerHTML   += sep + '<li id="regexp' + this.id + '">'
				+ sep + "\t" + '<span>'
				+ sep + "\t\t" + '<label for="find' + this.id + '">Find <span>' + this.b + '</span></label>'
				+ sep + "\t\t" + '<input type="text" name="find' + this.id + '" id="find' + this.id + '" value="" class="find" />'
				+ sep + "\t" + '</span>'
				+ sep + "\t" + '<span>'
				+ sep + "\t\t" + '<label for="replace">Replace <span>' + this.id + '</span></label>'
				+ sep + "\t\t" + '<input type="text" name="replace' + this.id + '" id="replace' + this.b + '" value="" class="replace" />'
				+ sep + "\t" + '</span>'
				+ sep + "\t" + '<span>'
				+ sep + "\t\t" + '<label for="textarea' + this.id + '">'
				+ sep + "\t\t\t" + '<input type="checkbox" name="textarea' + this.id + '" id="textarea' + this.b + '" value="textarea" title="Make Find ' + this.b + ' and Replace ' + this.b + ' multi line"  />'
				+ sep + "\t\t\t" + 'Multi line'
				+ sep + "\t\t" + '</label>'
				+ sep + "\t" + '</span>'
				+ sep + '</li>';

		if( this.id == 1 ) {
			this.p.innerHTML += sep + '<button id="remove_regex_pair">Remove</button>'
					  + sep + '<label for="remove_regex_pair"><span>Remove</span> the last Find/Replace pair</label>';
					
			this.less = document.getElementById('remove_regex_pair');
			this.less.onclick = function() {
				this.regexPairRemove();
				return false;
			}
		}
		this.id += 1;

		return false;
	},


	function regexPairRemove() {
		this.b -= 1;
		console.log( "line: 64\nid = " + this.id + "\nb = " + this.b + "\nid > 1 = " + ( this.id > 1 ) );
		if( this.id > 1 ) {
			console.log( 'we can try and remove something' );
			if( this.id == 2 ) {
				conslol.log( 'we can try and remove the "Remove" button' );
			alert();
				this.button = this.p.getElementsByTagName('button');
				this.label  = this.p.getElementsByTagName('label');
				console.log( 'attempting to remove less.onclick event' );
				less.onclick = false;
//				this.p.removeChild( button[1] );
				console.log( 'we removed the "Remove" button' );	
//				this.p.removeChild( label[1] );
				console.log( 'we removed the "Remove" label' );	
			}
			this.ol.removeChild( this.LIs[b] );
			console.log( 'removed last Find/Replace' );
		}
		console.log( 'removed last Find/Replace pair and "Remove" button' );
		return false;
	};

	function getID() {
		return this.id;
	}
};


console.log('id = '+regexPair.getID());
more.onclick = function() {
	regexPair.doit.regexPairAdd( more , less );
	return false;
};


