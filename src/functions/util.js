'use strict';

export default {
	hello() {
		console.log("util/hello");
	},
	helloBabel() {
		var cb = () => console.log("util/helloBabel");
		cb();
	}
}
