/*
  Universal Module Definition came in to picture to unify the module declarations which creates the modules
  that works in any browser. This is compatible with script loaders like RequireJS, CurlJS, Browserify
  This had also added case handling to deal with CommonJS.
  - There are Grunt and Gulp plugins used to automate ur code in UMD pattern
  - Used only for client & server side.
  LINK: http://garrettn.github.io/blog/2014/02/19/write-modular-javascript-that-works-anywhere-with-umd/
*/
(function (root, factory) {
/* root param is window object
   factory param is where the module instantiation happens,
   This is equivelent to define in RequireJS or module.exports in CommonJS
*/
if (typeof define === 'function' && define.amd) {
    // AMD module registration comes here.
    define(['Charts'], factory);
} else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('Charts'));
} else {
    // Browser globals (root is window)
    root.returnExports = factory(root.Charts);
}
}(this, function (Charts) {
    var module = {
        pie: Charts.createPieChart(),
        bar: Charts.createBarChart()
    }
    return module;
}));
// you can consume the UMD as below
var chartModule = require('./Charts.js');

