var isCoolNumber = require(process.argv[2]);
var assert = require('assert');

assert.strictEqual(isCoolNumber(42), true, '42 should return "true"');
