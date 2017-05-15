// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
import test from 'ava';

// --------------------------------------------------
// INIT
// --------------------------------------------------
test.before( ( t ) => {
	console.log( 'INSIDE `test.before()`' );
} );

test.beforeEach( ( t ) => {
	console.log( 'INSIDE `test.beforeEach()`' );
} );

test( 'Primary Test', ( t ) => {
	console.log( 'INSIDE `Primary Test`' );

	t.pass();
} );
