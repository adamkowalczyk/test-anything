var test = require('tape');
var feedCat = require(process.argv[2]);

test('Cat will eat anything but "chocolate"', function (t) {
	t.strictEqual(feedCat('ham'), 'yum', 'Cat thinks ham in yummy');
	t.throws(function(){
		feedCat('chocolate');
	});
	t.end();
});

// One use of bind:

// t.throws(feedCat.bind(null, 'chocolate'))