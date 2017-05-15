// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
import test from 'ava';

// --------------------------------------------------
// INIT
// --------------------------------------------------
test.after( ( t ) => {
	console.log( 'INSIDE `test.after()`' );
} );

test.afterEach( ( t ) => {
	console.log( 'INSIDE `test.afterEach()`' );
} );

test( 'Primary Test', ( t ) => {
	console.log( 'INSIDE `Primary Test`' );

	t.pass();
} );
