'use strict';
var React = require('react');
var TextForm = require('src/reactComponents/TextForm.js');
var util = require('src/functions/util.js');

export default React.createClass({
	hello() {
		console.log("Root/sayHello");
	},
	helloUtil(e) {
		console.log(e);
		util2.hello();
	},
	render() {
		console.log("render")
		return (
			<TextForm />
		);
	}
});
