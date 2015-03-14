'use strict';

export default {
	dummyPromise() {
		return new Promise((resolve, reject) => {
			resolve("don't call this method! it's so complicated");
		});
	},
	hello() {
		console.log("AsyncUtil/hello");
	}
}
