var randomIntegerBetween = function(f,t) {
      // make sure f and t are numbers and f and t are numbers
      try {
         if (f <= t) {
            var r =  Math.floor(Math.random() * (t - f + 1)) + f; 
            console.log("Random number between " + f + " and " + t + " is " + r);
            return r;
         } else {
            throw new Error("Cannot generate random integer. From("+f+") is greater than to("+t+")");
         }
      }
      catch(ex) {
         console.log(ex)
         return false;
      }
      
};

var randomFloatBetween = function(f,t) {
   // make sure f and t are numbers
   try {
      if ((f <= t) && !isNaN(f) && !isNaN(t)) {
         var r = Math.random() * (t-f) + f;
         console.log("Random number between " + f + " and " + t + " is " + r);
         return r;
      } else {
         throw new Error("Cannot generate random float");
      }
   } 
   catch(ex) {
      console.log(ex);
      return false;
   }
};

/** for arrays, would like to set these on the Array prototype */
// do we need both row and columns?  can rows be inferred from columns?
var to2D = function(s, r, c) {
   // todo: make sure s is Array
   try {
      if (typeof s === "object"  && s !== null) { 
         var a = [],
            r = [],
            l = s.length,
            i = 0;

         for (i; i<l; i++) {
            r.push(s[i]);
            if((i+1) % c === 0 && i !== 0) {
               a.push(r);
               r = [];
            }
         }
         return a;
      } else {
         throw new Error("source("+s+") must be an array not "+typeof s);
      }
   }
   catch(ex) {
      console.log(ex);
      return false;
   }
};

/****************************/
var initArrayWithValue = function(l,v) {
   var a = new Array(l);
   for (var i=0; i< a.length; i++) {
      a[i] = v;
   }

   return a;
}