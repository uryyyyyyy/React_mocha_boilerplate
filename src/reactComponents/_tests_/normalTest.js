var assert = require('assert')
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var testMocker = require('src/testMocker.js')

var jsdom = require("jsdom");
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = document.parentWindow;
global.navigator = window.navigator;

describe("#react normal test", function () {
	var TextForm = testMocker.loadModule("./testSandbox/src/reactComponents/TextForm.js");

	it("rendering react TextForm", function () {

		var testForm = TestUtils.renderIntoDocument(
			<TextForm  />
		);
		testForm.sayHello();
	});
});
