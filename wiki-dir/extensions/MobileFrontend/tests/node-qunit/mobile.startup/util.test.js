let util;
const
	dom = require( '../utils/dom' ),
	mw = require( '../utils/mw' ),
	jQuery = require( '../utils/jQuery' ),
	oo = require( '../utils/oo' ),
	sinon = require( 'sinon' );

/** @type {sinon.SinonSandbox} */ let sandbox;

QUnit.module( 'MobileFrontend util.js', {
	beforeEach: function () {
		sandbox = sinon.sandbox.create();
		dom.setUp( sandbox, global );
		mw.setUp( sandbox, global );
		jQuery.setUp( sandbox, global );
		oo.setUp( sandbox, global );
		util = require( '../../../src/mobile.startup/util' );
	},
	afterEach: function () {
		jQuery.tearDown();
		sandbox.restore();
	}
} );

QUnit.test( 'Promise.all() success', function ( assert ) {
	const p = util.Deferred(),
		p2 = util.Deferred();

	p.resolve( 'a' );
	p2.resolve( 'b' );
	return util.Promise.all( [ p, p2 ] ).then( function ( result, result2 ) {
		assert.strictEqual( result, 'a', 'All promises resolved (yay)' );
		assert.strictEqual( result2, 'b', 'All promises resolved (yay)' );
	} );
} );

QUnit.test( 'Promise.all() reject', function ( assert ) {
	const p = util.Deferred(),
		p2 = util.Deferred();

	p.resolve( 'a' );
	p2.reject( 'b' );
	return util.Promise.all( [ p, p2 ] ).catch( function ( result ) {
		assert.strictEqual( result, 'b', 'The promise rejects' );
	} );
} );

QUnit.test( 'escapeSelector()', function ( assert ) {
	assert.strictEqual(
		util.escapeSelector( '#selector-starts-with-hash' ),
		'\\#selector-starts-with-hash'
	);
} );

QUnit.test( 'docReady()', function ( assert ) {
	const done = assert.async();

	util.docReady( () => {
		assert.true( true, 'docReady calls the callback eventually' );
		done();
	} );
} );

QUnit.test( 'Deferred() - resolve', function ( assert ) {
	const deferred = new util.Deferred(),
		response = 'response';
	deferred.resolve( response );
	return deferred.then( function ( res ) {
		assert.strictEqual( res, response );
	} );
} );

QUnit.test( 'Deferred() - reject', function ( assert ) {
	const deferred = new util.Deferred(),
		response = 'response';
	deferred.reject( response );
	return deferred.catch( function ( error ) {
		assert.strictEqual( error, response );
	} );
} );
QUnit.test( 'getDocument()', function ( assert ) {
	assert.strictEqual( util.getDocument().length, 1 );
} );

QUnit.test( 'getWindow()', function ( assert ) {
	assert.strictEqual( util.getWindow().length, 1 );
} );

QUnit.test( 'parseHTML()', function ( assert ) {
	const htmlFragment = util.parseHTML( '<p>element content</p>', document );
	assert.strictEqual( typeof htmlFragment, 'object' );
	assert.strictEqual( htmlFragment[ 0 ].innerHTML, 'element content' );
} );

QUnit.test( 'extend()', function ( assert ) {
	const a = { a: 'apple' },
		b = { b: 'banana' };
	util.extend( a, b );
	assert.strictEqual( JSON.stringify( a ), '{"a":"apple","b":"banana"}' );
} );
