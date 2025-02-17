const add = function(val1,val2) {
	return val1+val2;
};

const subtract = function(val1, val2) {
	return val1-val2;
};

const sum = function(arr) {
	return arr.reduce((acc, val) => acc+val, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, val) => acc*val)
};

const power = function(val1, val2) {
  let result = 1;
  for (let i = 0; i < val2; i++) {
    result *=val1;    
  }
  return result
}

const factorial = function(val) {	
  let result = 1
  for (let i = val; i >= 1; i--) {
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
