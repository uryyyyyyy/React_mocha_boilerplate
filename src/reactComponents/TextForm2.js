'use strict';
var React = require('react');
var util2 = require('src/functions/util2.js');

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
		util2.hello();
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
