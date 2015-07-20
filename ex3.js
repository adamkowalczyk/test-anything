var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify returns fancy strings', function (t) {
	t.strictEqual(fancify('Beep Boop'), '~*~Beep Boop~*~', 'Wraps string with ~*~');
	t.strictEqual(fancify('Beep Boop', true), '~*~BEEP BOOP~*~', 'Transform string to all caps');
	t.strictEqual(fancify('Beep Boop', false, '$'), '~$~Beep Boop~$~', 'Set special character');
	t.end();
});