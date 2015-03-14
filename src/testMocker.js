require("babel/register");
var vm = require('vm');
var fs = require('fs');
var path = require('path');

/**
* Helper for unit testing:
* - load module with mocked dependencies
* - allow accessing private state of the module
*
* @param {string} filePath Absolute path to module (file to load)
* @param {Object=} mocks Hash of mocked dependencies
*/
exports.loadModule = function(filePath, mocks) {
    mocks = mocks || {};
    var reactStub = require("react").createClass({render:function(){return null;}});

    var resolveModule = function(moduleName) {
        if(moduleName.indexOf("src/") === -1) return require(moduleName);
        if(mocks[moduleName]) return mocks[moduleName];
        return reactStub;
    };

    var exports = {};
    var context = {
        require: function(name) {
            console.log(name);
            console.log(mocks);
            return resolveModule(name);
        },
        console: console,
        exports: exports,
        module: {
            exports: exports
        }
    };

    vm.runInNewContext(fs.readFileSync(filePath), context);
    return context.module.exports;
};
