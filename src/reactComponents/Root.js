'use strict';
var React = require('react');
var TextForm = require('src/reactComponents/TextForm.js');
var NestComponent = require('src/reactComponents/NestComponent.js');

export default React.createClass({
	hello() {
		console.log("Root/sayHello");
	},
	render() {
		console.log("render");
		return (
			<div>
				<TextForm />
				<NestComponent />
			</div>
		);
	}
});
