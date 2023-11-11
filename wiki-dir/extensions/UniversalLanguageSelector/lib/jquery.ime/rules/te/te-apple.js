( function ( $ ) {
	'use strict';

	var teApple = {
		id: 'te-apple',
		name: 'ఆపిల్',
		description: 'Apple keyboard layout for Telugu',
		date: '2014-12-27',
		author: 'Praveen Illa',
		license: 'GPLv3',
		version: '1.0',
		patterns: [

			[ '1', '1' ],
			[ '2', '2' ],
			[ '3', '3' ],
			[ '4', '4' ],
			[ '5', '5' ],
			[ '6', '6' ],
			[ '7', '7' ],
			[ '8', '8' ],
			[ '\\(', '(' ],
			[ '9', '9' ],
			[ '\\)', ')' ],
			[ '0', '0' ],
			[ '\\_', '÷' ],
			[ '\\-', '×' ],
			[ '\\+', '+' ],
			[ '\\=', '=' ],

			[ '\\!', '!' ],
			[ '\\@', '\'' ],
			[ '\\#', '%' ],
			[ '\\$', '్పు' ],
			[ '\\%', '్ర' ],
			[ '\\^', '-' ],
			[ '\\&', '|' ],
			[ '\\*', '`' ],

			[ '([క-హ])e', '$1ా' ],
			[ '([క-హ])E', '$1ౄ' ],
			[ '([క-హ])r', '$1ి' ],
			[ '([క-హ])w', '$1ీ' ],
			[ '([క-హ])W', '$1ృ' ],
			[ '([క-హ])t', '$1ొ' ],
			[ '([క-హ])y', '$1ో' ],
			[ '([క-హ])u', '$1ె' ],
			[ '([క-హ])i', '$1ు' ],
			[ '([క-హ])o', '$1ే' ],
			[ '([క-హ])p', '$1ూ' ],
			[ '([క-హ])\\[', '$1ై' ],
			[ '([క-హ])\\]', '$1ౌ' ],

			[ 'Q', 'క్ష్మి' ],
			[ 'q', 'అ' ],
			[ 'W', 'ఋ' ],
			[ 'w', 'ఈ' ],
			[ 'E', 'ౠ' ],
			[ 'e', 'ఆ' ],
			[ 'R', 'ఙ' ],
			[ 'r', 'ఇ' ],
			[ 'T', 'ఞ' ],
			[ 't', 'ఒ' ],
			[ 'Y', 'క్ష' ],
			[ 'y', 'ఓ' ],
			[ 'U', 'శ్రీ' ],
			[ 'u', 'ఎ' ],
			[ 'I', '/' ],
			[ 'i', 'ఉ' ],
			[ 'O', 'స్త్ర' ],
			[ 'o', 'ఏ' ],
			[ 'P', 'ష్ట్ర' ],
			[ 'p', 'ఊ' ],
			[ '\\{', 'క్ష్మ' ],
			[ '\\[', 'ఐ' ],
			[ '\\}', '!' ],
			[ '\\]', 'ఔ' ],
			[ '\\|', 'ఁ' ],
			[ '\\\\', 'ః' ],
			[ 'A', 'ళ' ],
			[ 'a', 'ల' ],
			[ 'S', 'థ' ],
			[ 's', 'త' ],
			[ 'D', 'ధ' ],
			[ 'd', 'ద' ],
			[ 'F', 'శ' ],
			[ 'f', 'వ' ],
			[ 'G', ':' ],
			[ 'g', 'ం' ],
			[ 'H', '్' ],
			[ 'h', '్' ],
			[ 'J', 'ఖ' ],
			[ 'j', 'క' ],
			[ 'K', 'ఱ' ],
			[ 'k', 'ర' ],
			[ 'L', 'ణ' ],
			[ 'l', 'న' ],
			[ ':', 'ఫ' ],
			[ ';', 'ప' ],
			[ '"', 'ష' ],
			[ '\\\'', 'స' ],
			[ '\\~', '~' ],
			[ '\\`', '`' ],
			[ 'Z', 'ఠ' ],
			[ 'z', 'ట' ],
			[ 'X', 'ఘ' ],
			[ 'x', 'గ' ],
			[ 'C', 'ఢ' ],
			[ 'c', 'డ' ],
			[ 'V', 'భ' ],
			[ 'v', 'బ' ],
			[ 'B', 'హ' ],
			[ 'b', 'మ' ],
			[ 'N', 'క్ష్మీ' ],
			[ 'n', 'య' ],
			[ 'M', 'ఛ' ],
			[ 'm', 'చ' ],
			[ '\\<', ';' ],
			[ ',', ',' ],
			[ '\\>', '?' ],
			[ '\\.', '.' ],
			[ '/', 'జ' ],
			[ '\\?', 'ఝ' ]

		],
		patterns_x: [

			/*
			 * Some characters originally not there
			 * in original layout but for accessibility
			 * kept these based on inscript.
			 */

			[ '\\!', '౹' ],
			[ '\\@', '౼' ],
			[ '\\#', '౺' ],
			[ '\\$', '౽' ],
			[ '4', '₹' ],
			[ '\\%', '౻' ],
			[ '\\^', '౾' ],
			[ '1', '\u200d' ],
			[ '2', '\u200c' ],
			[ '0', '౸' ],
			[ '\\-', '౿' ],
			[ 'R', 'ౣ' ],
			[ 'r', 'ౡ' ],
			[ 'p', 'ౙ' ],
			[ 'F', 'ఌ' ],
			[ 'f', 'ౢ' ],
			[ ';', 'ౘ' ],
			[ 'Z', 'ౖ' ],
			[ 'z', 'ౕ' ],
			[ '\\>', 'ఽ' ],
			[ '\\.', '॥' ]
		]
	};

	$.ime.register( teApple );
}( jQuery ) );
