var test = require('tape');
var repeat = require(process.argv[2]);
var num = 5;

test('repeat calls callback n times', function (t) {
	t.plan(num);
	repeat(num, function(){
		t.pass('callback called');
	});
});