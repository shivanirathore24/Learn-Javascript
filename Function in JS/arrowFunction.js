/* Arrow Function */

var prod = (num1, num2) => {
  return num1 * num2;
};
console.log(prod(3, 4));

/* The arrow function implicitely returns if there is a single line of code, but if you enclose the code
within the curly brackets, it will not return implicitely */
var prod1 = (num1, num2) => num1 * num2;
console.log(prod1(2, 4));
