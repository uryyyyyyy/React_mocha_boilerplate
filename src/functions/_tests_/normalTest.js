var assert = require('assert');
var proxyquire =  require('proxyquire');

describe("#normalTest.js", function () {
	var util = require("../util.js");

	it("hello test", function () {
		util.hello();
	});
	it("hello helloBabel", function () {
		util.helloBabel();
	});
});
