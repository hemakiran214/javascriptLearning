//Explanation of AMD and implementation
/*
 Advantages:
   - ID based dependency resolution.
   - No need to have concrete implementation. Can be used for mocking.
   - Provides mechanism to control the dependencies in asynchronous way and not polluting globals.
   - loads the modules when the dependencies are available.
   - Named modules instead of only file specific modules like in Common JS.
   - Used only for client side.
   LINK: https://requirejs.org/
*/

/* 
 DashboardModule is module Name, Array is for dependencies and function is to define functionality
 for the module. This will load Charts and SummaryGrid after will build a module.
*/
   define("DashboardModule",[ 
     'Charts',
     'SummaryGrid'
   ], function(Charts, SummaryGrid) {
     let DashboardModule = {
       displayCharts: Charts.renderCharts(),
       fetchSummary: SummaryGrid.getData()
     }
    return DashboardModule;     
   });

//Example for dymanic dependancy loading. This is called as simplified CommonJS wrapping.

define(function(require) {
  var appCharts = {};
  appCharts.isChartsReady= false;
  require(["PieChart", "BarChart"], function (PieChart, BarChart) {
    isReady = true;
    appCharts.PieChart = PieChart;
    appCharts.BarChart = BarChart;
    appCharts.isChartsReady = true;
  });
  return appCharts;     
});

/* AMD works on Client side while the CJS is used for server side. 
   AMD is more ease in use in comparision with CJS and developer friendly
   we can use RequireJs, CurlJs, Lsjs, Dojo for loading/ compiling the AMD.
*/
// you can consume the AMD as below
var chartModule = require('./Charts.js');