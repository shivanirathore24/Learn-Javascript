/* reduce() function : JS Higher Order Function
Syntax : array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)
1- reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for
each value of the array (from left to right) and the return value of the function is stored in an accumulator.
2- Unlike a map, the reduce does not return an array or modify the array. It returns the final value of
the accumulator after the operation of the callback function has been performed on the array.
3- If we apply the reduce to an empty array, it will print the initial value that is passed
although if the no initial value is passed with an empty array, it will throw an error.
*/

const inputs = [2, 3, 4, 5, 6, 10];
const sum1 = inputs.reduce((total, num) => {
  return total + num;
}, 0);
console.log(sum1); //30

const sum2 = inputs.reduce((total, num, index) => {
  console.log(total, index);
  return total + num;
}, 0);
console.log(sum2); //30

/*
console.log(total, index); 
0 0
2 1
5 2
9 3
14 4
20 5 
*/
