const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
	var sum = 0;
  for (const number of numbers)
    sum += number;

  return sum;
};

const multiply = function(numbers) {
  if (numbers.length === 0) 
    return 0;

  var sum = 1;
  for (const number of numbers)
    sum *= number;
  
  return sum;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(num) {
  if (num === 1 || num === 0)
    return 1;
  else
    return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
