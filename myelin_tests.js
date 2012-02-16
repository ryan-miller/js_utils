function isBetween(from, to) {
   var r = randomIntegerBetween(from,to);
   return (from <= r && r <= to);
}


test('Array utils', function() {
   ok(isBetween(1,10), 'positive integers');
   ok(isBetween(-10,-1), 'negative integers');
   ok(isBetween(0,1), 'positive decimals');
   ok(isBetween(-1,0), 'negative decimals');
})


/*
test('assertions', function() {  
    ok( 1 == 1, 'one equals one');  
})
// Let's test this function  
function isEven(val) {  
    return val % 2 === 0;  
}  
  
test('isEven()', function() { 
    ok(isEven(0), 'Zero is an even number'); 
    ok(isEven(2), 'So is two'); 
    ok(isEven(-4), 'So is negative four'); 
    ok(!isEven(1), 'One is not an even number'); 
    ok(!isEven(-7), 'Neither does negative seven'); 
 
    // Fails 
    ok(isEven(3), 'Three is an even number');  
})
*/