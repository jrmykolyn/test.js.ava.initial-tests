// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
import test from 'ava';

// --------------------------------------------------
// INIT
// --------------------------------------------------
test.after.always( ( t ) => {
	console.log( 'INSIDE `test.after.always()`' );
} );

test.afterEach.always( ( t ) => {
	console.log( 'INSIDE `test.afterEach.always()`' );
} );

test( 'Primary Test', ( t ) => {
	console.log( 'INSIDE `Primary Test`' );

	t.fail();
} );
