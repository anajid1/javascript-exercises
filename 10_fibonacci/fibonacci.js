const fibonacci = function(fib) {
  if (fib < 0)
    return "OOPS";

  if (fib == 0)
    return 0;

  if (fib == 1 || fib == 2)
    return 1;
  
  var prev2 = 1;
  var prev1 = 1;

  var curr;

  for (var i = 3; i <= fib; i++) {
    curr = prev2 + prev1;

    prev2 = prev1;
    prev1 = curr;
  }

  return curr;

};

// Do not edit below this line
module.exports = fibonacci;
