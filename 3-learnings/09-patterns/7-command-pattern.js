// To wrap up, I would say the command design pattern ends my 7 best sums of JavaScript design patterns. The command design pattern encapsulates method invocation, operations or requests into a single object so that we can pass method calls at our discretion. The command design pattern gives us an opportunity to issue commands from anything executing commands and delegates responsibility to different objects instead. These commands are presented in run() and execute() format.

(function(){
  const carManager = {
  
    //information requested
    requestInfo: function( model, id ) {
      return "The information for " + model + " with ID " + id + " is foo bar";
    },
  
    // now purchase the car
    buyVehicle: function( model, id ){
      return "You have successfully purchased Item " + id + ", a " + model;
    },
  
    // now arrange a viewing
    arrangeViewing: function( model, id ){
      return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }
  };
})();
