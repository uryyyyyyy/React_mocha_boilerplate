'use strict';
import React  from 'react';

export default React.createClass({
	propTypes: {
		onChange: React.PropTypes.func,
		value: React.PropTypes.string
	},
	getInitialState() {
		return {
			text:''
		};
	},
	onChange(e) {
		console.log(e);
	},
	render() {
		console.log("render")
		return (
			<input type="text"
			className="form-control"
			value={this.props.value}
			onChange={this.onChange}
			/>
		);
	}
});
