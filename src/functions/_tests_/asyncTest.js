require("babel/register"); //import Promise
var assert = require('assert');
var proxyquire =  require('proxyquire');

describe("#asyncTest", function () {
	var mock = {
		dummyPromise: function hello() {
			return new Promise((resolve, reject) => {
				resolve("mock promise:");
			});
		}
	};
	var util2 = proxyquire("../util2.js",
		{ './AsyncUtil.js': mock });

	it("promise result", function () {
		return util2.returnComplicatedResult()
			.then(v => assert.equal(v, "mock promise:util2"))
	});
});
