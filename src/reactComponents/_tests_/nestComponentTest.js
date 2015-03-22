var assert = require('assert');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var proxyquire =  require('proxyquire');

var jsdom = require("jsdom");
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = document.defaultView;
global.navigator = window.navigator;

describe("#react nestComponent test", function () {
	var mock = require("react").createClass({render() {return null;}});
	var NestComponent = proxyquire("../NestComponent.js", {'./UntouchableOne.js': mock});

	it("render NestComponent, but don't render untouchableOne", function () {

		var nestComponent = TestUtils.renderIntoDocument(
			<NestComponent  />
		);
		console.log(nestComponent.calc());
		assert.equal(nestComponent.calc(), 3);

	});
});
