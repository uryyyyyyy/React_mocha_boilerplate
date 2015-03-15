'use strict';
import React  from 'react';

export default React.createClass({
	sayHello() {
		console.log("TextForm/sayHello");
	},
	render() {
		console.log("render TextForm");
		return (
			<input type="text"
			className="form-control"
			value={this.props.value}
			onChange={this.onChange}
			/>
		);
	}
});
