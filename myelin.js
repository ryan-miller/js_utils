var randomIntegerBetween = function(from,to) {
      var r =  Math.floor(Math.random() * (to - from + 1)) + from; 
      console.log("Random number between " + from + " and " + to + " is " + r);
      return r;
};