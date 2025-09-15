const add = function(x, y) {
  return x+y;
};

const subtract = function(x, y) {
  return x-y;
};

const sum = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((total, number) => total + number);
  } 
};

const multiply = function(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((total, number) => total * number);
  } 

};

const power = function(x, y) {
  return x**y;
};

const factorial = function(number) {
  let result = 1
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
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
