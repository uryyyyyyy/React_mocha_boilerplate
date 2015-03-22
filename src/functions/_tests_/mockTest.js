var assert = require('assert');
var proxyquire =  require('proxyquire');

describe("#mockTest", function () {
	var mock = {
		hello: function hello() {
			console.log("hello mock");
		}
	};
	var util2 = proxyquire("../util2.js",
		{ './AsyncUtil.js': mock });

	it("mock hello", function () {
		util2.hello();
	});
});
