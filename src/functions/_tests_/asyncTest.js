var assert = require('assert')
var testMocker = require('src/testMocker.js')

describe("#asyncTest", function () {
    var mock={};
    mock["src/functions/AsyncUtil.js"] = {
        dummyPromise: function hello() {
            return new Promise((resolve, reject) => {
                resolve("mock promise:");
            });
        }
    };
    var util2 = testMocker.loadModule("./testSandbox/src/functions/util2.js", mock);

    it("promise result", function () {
        return util2.returnComplicatedResult()
            .then(v => assert.equal(v, "mock promise:util2"))
    });
});
