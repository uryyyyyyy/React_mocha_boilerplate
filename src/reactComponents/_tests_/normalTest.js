var assert = require('assert');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var jsdom = require("jsdom");
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = document.defaultView;
global.navigator = window.navigator;

describe("#react normal test", function () {
	var TextForm = require("../TextForm.js");

	it("rendering react TextForm", function () {

		var testForm = TestUtils.renderIntoDocument(
			<TextForm  />
		);
		testForm.sayHello();
	});
});
