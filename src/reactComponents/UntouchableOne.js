'use strict';
var React = require('react');

export default React.createClass({
	render() {
		console.log("you shouldn't render this component. it's break everything");
		return (
			<p> break down </p>
		);
	}
});
