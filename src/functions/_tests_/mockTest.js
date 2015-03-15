var assert = require('assert')
var testMocker = require('src/testMocker.js')

describe("#mockTest", function () {
	var mock={};
	mock["src/functions/AsyncUtil.js"] = {
		hello: function hello() {
			console.log("hello mock");
		}
	};
	var util2 = testMocker.loadModule("./testSandbox/src/functions/util2.js", mock);

	it("mock hello", function () {
		util2.hello();
	});
});
