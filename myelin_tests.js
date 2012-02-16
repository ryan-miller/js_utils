function isIntBetween(from, to) {
   var r = randomIntegerBetween(from, to);
   return (from <= r && r <= to);
}

function isFloatBetween(from, to) {
   var r = randomFloatBetween(from, to);
   return (from <= r && r <= to);
}

function isCorrectArray(from, rows, columns, to) {
   var n = to2D(from, rows, columns);
    return !!n && !!to && !(n<to || to<n); 
}

test('Random numbers', function() {
   // integers
   ok(isIntBetween(1,10), 'positive integers');
   ok(isIntBetween(-10,-1), 'negative integers');
   ok(isIntBetween(0,1), 'positive integers');
   ok(isIntBetween(-1,0), 'negative integers');
   ok(isIntBetween(-100, 100), 'span zero');
   
   // floats
   ok(isFloatBetween(1.9,10.9), 'positive floats');
   ok(isFloatBetween(-10.4,-1.1), 'negative floats');
   ok(isFloatBetween(0.0,1.9), 'positive floats');
   ok(isFloatBetween(-1.9,0.0), 'negative floats');
   ok(isFloatBetween(-100.4, 100.7), 'span zero');
});

test('Array functions', function() {
   // 1d array to 2d array
   ok(isCorrectArray([0,0,0,0], 2, 2, [[0,0],[0,0]]));
   
   // 2d array to 1d array
   
});


