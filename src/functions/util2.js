'use strict';
var AsyncUtil = require('src/functions/AsyncUtil.js')

export default {
	returnComplicatedResult() {
		return AsyncUtil.dummyPromise().then(v => v + "util2");
	},
	hello() {
		AsyncUtil.hello();
	}
}
