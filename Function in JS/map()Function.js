/* map() Function : JS higher order function 
Syntax: array.map(function(currentValue, index, arr), thisValue)
1- map() function is used for transforming values and creates a new array from calling a function for every array element.
2- map() does not execute the function for empty elements.
3- map() does not change the original array.
4- If the callback function does not explicitly return a value, it returns undefined by default. 
Therefore, when the callback function does not return a value, the map() function includes 
undefined values for each element in the resulting array. */

const inputs = [2, 4, 6, 8, 7];
const squaredArray1 = inputs.map(function (currentElement) {
  return currentElement * currentElement;
});
console.log(squaredArray1); //[4, 16, 36, 64, 49]

const squaredArray2 = inputs.map((num) => num * num);
console.log(squaredArray2); //[4, 16, 36, 64, 49]
