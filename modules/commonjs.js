/*
  Here's you have learned about CommonJS, This is used prior to ES6 Modules and used to have a
  simple modularity between different sections instead on so many IIFE.
  ------
  can be defined in JS file like // Jet.js
  */
  function manufactureJet(){
      var jet = {};
      jet.startFlying = () => {
          console.log("Jet started Flying....");
      };
      jet.isFlying = false;
      return jet;
  }
  module.exports = manufactureJet;
  //import the commonJS module in Consumer.js File like...
  var myJet = require('./Jet.js'); // Note: All require creates global variables
  var jetFunctions = myJet.manufactureJet(); 
  // Will return singleton and maintains the same instance for all imports using require key.
  // Will use the inner functions as below.
  jetFunctions.startFlying();
  jetFunctions.isFlying = true;
  /* In order to compile the commonjs files we need to use browserify/ Grunt Task with cjsc
    CommonJS Problems:
     - allowing only one module export per file called as transport format
     - Used to load the modules synchronously and always being global variables.
     - no mechanism to handle dependent loading
     - must have a variable of function declared to assign it to exports objects
    TO DEAL with these AMD came in to picture... move to amd.js to know more.
*/
