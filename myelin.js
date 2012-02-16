var randomIntegerBetween = function(f,t) {
      var r =  Math.floor(Math.random() * (t - f + 1)) + f; 
      console.log("Random number between " + f + " and " + t + " is " + r);
      return r;
};

var randomFloatBetween = function(f,t) {
   var r = Math.random() * (t-f) + f;
   console.log("Random number between " + f + " and " + t + " is " + r);
   return r;
};

var to2D = function(s, r, c) {
   // todo: make sure array is Array
   var a = [],
      r = [],
      l = s.length,
      i = 0;
   
   for (i; i<l; i++) {
      r.push(s[i]);
     
      if((i+1) % c === 0 && i !== 0) {
         a.push(r);
         r=[];
      }
   }
   return a;
};