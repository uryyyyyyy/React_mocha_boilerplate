'use strict';
var React = require('react');
var UntouchableOne = require('src/reactComponents/UntouchableOne.js');

export default React.createClass({
	calc() {
		return 3;
	},
	render() {
		console.log("render Form2");
		return (
			<UntouchableOne />
		);
	}
});
