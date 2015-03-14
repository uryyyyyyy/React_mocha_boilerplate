var assert = require('assert')
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var loadModule = require('./mocker.js').loadModule

var jsdom = require("jsdom");
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = document.parentWindow;
global.navigator = window.navigator;

describe("#untestableMethod", function () {
    var mock={};
    var TextForm = loadModule("./compiled/src/reactComponents/TextForm.js", mock);

    it("引数を足した結果を返すこと", function () {

        var testForm = TestUtils.renderIntoDocument(
            <TextForm  />
        );
        console.log("instanceの中身");
        console.log(testForm);
        testForm.onChange("aaa");

    });
});
