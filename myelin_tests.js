function isIntBetween(from, to) {
  var r = randomIntegerBetween(from, to)
  return (from <= r && r <= to)
}

function isFloatBetween(from, to) {
  var r = randomFloatBetween(from, to)
  return (from <= r && r <= to)
}

/* compare arrays
    return !!n && !!to && !(n<to || to<n) 
*/


test('Random numbers', function() {
  // integers
  ok(isIntBetween(1,10), 'positive integers')
  ok(isIntBetween(-10,-1), 'negative integers')
  ok(isIntBetween(0,1), 'positive integers')
  ok(isIntBetween(-1,0), 'negative integers')
  ok(isIntBetween(-100, 100), 'span zero')
  ok(isIntBetween(null, 1),'check from null')
  ok(isIntBetween(0, null),'check to null')
  ok(!isIntBetween(5, 1),'from is greater than to')
  ok(!isIntBetween("Five", 0), 'numbers only')

  // floats
  ok(isFloatBetween(1.9,10.9), 'positive floats')
  ok(isFloatBetween(-10.4,-1.1), 'negative floats')
  ok(isFloatBetween(0.0,1.9), 'positive floats')
  ok(isFloatBetween(-1.9,0.0), 'negative floats')
  ok(isFloatBetween(-100.4, 100.7), 'span zero')
  ok(isFloatBetween(null, 1),'check from null')
  ok(isFloatBetween(0, null),'check to null')
  ok(!isFloatBetween(5, 1),'from is greater than to')
  ok(!isFloatBetween("Five", 0), 'numbers only')
})

test('Array functions', function() {
  // 1d array to 2d array
  deepEqual(to2D([0,0,0,0],2,2), [[0,0],[0,0]],'basic array')
  notDeepEqual(to2D(null, 2, 2), null, 'handles null source arrays')

  // user provides in correct dimensions

  // 2d array to 1d array

  // init array with value
  deepEqual(initArrayWithValue(2,0), [0,0], 'simple array')
  deepEqual(initArrayWithValue(5,"a"), ["a","a","a","a","a"],'string array')
  deepEqual(initArrayWithValue(3,null), [null,null,null], 'null array')
  notDeepEqual(initArrayWithValue(5,0), [0,0], 'just for kicks')
})