// Immediately Invokable Function Expression. Starting of Modularity in JS in Olden days.
(function(){
    var iiflVariable = {
        a: "This is A",
        b: "This is B",
        c: false
    } // Private to IIFE only - using it in functions defined within.
    this.operations = { // Assigning it to global scope variables 
        sum: function (a, b){ return a + b },
        data: () => { return iiflVariable }
    }
  }());
  console.log(operations);
  // Logs - {sum: function (a,b)....,data: {a:"..", b:"...",.....} }
  //-------------------------------------------------------
  (()=> {
      var operation = (a, b)=>{
          return a + b;
      }
      this.addition =  operation;
  })();
  
  let multiply = (()=> {
      var operation = (a, b)=>{
          return a * b;
      }
      this.multiplier = operation;
      return operation;
  })();
  
  console.log(multiply); // logs function (a,b) = {return a * b};
  console.log(multiply == this.multiplier);  // logs true