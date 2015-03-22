'use strict';
var React = require('react');
var TextForm = require('./TextForm.js');
var NestComponent = require('./NestComponent.js');
var util = require('../functions/util.js');

export default React.createClass({
	hello() {
		console.log("Root/sayHello");
		util.hello();
	},
	render() {
		console.log("render");
		this.hello();
		return (
			<div>
				<TextForm />
				<NestComponent />
			</div>
		);
	}
});
