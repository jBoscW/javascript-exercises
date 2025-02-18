const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  // if (arr.length === 0)
  //   return 0;

	return arr.reduce((sum, i) => sum + i, 0);
};

const multiply = function(arr) {
  // if (arr.length === 0)
  //   return 0;

	return arr.reduce((sum, i) => sum * i);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let sum = 1;
  for (let i = 1; i <= a; i++) 
    sum *= i;
  return sum;
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
