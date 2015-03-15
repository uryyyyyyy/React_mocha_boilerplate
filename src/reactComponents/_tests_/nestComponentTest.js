var assert = require('assert')
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var testMocker = require('src/testMocker.js')

var jsdom = require("jsdom");
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = document.parentWindow;
global.navigator = window.navigator;

describe("#react nestComponent test", function () {
	var mock={};
	var NestComponent = testMocker.loadModule("./testSandbox/src/reactComponents/NestComponent.js", mock);

	it("render NestComponent, but don't render untouchableOne", function () {

		var nestComponent = TestUtils.renderIntoDocument(
			<NestComponent  />
		);
		console.log(nestComponent.calc());
		assert.equal(nestComponent.calc(), 3);

	});
});
