var assert = require('assert')
var testMocker = require('src/testMocker.js')

describe("#normalTest.js", function () {
    var util = testMocker.loadModule("./testSandbox/src/functions/util.js");

    it("hello test", function () {
        util.hello();
    });
});
