/* Function in JS */

//Function Declaration - can be hoisted
const sum1 = sum(5, 6);
console.log(sum1); //11

function sum(a, b) {
  return a + b;
}
const sum2 = sum(5, 6);
console.log(sum2); //11


//Function Expression - can't be hoisted
const sum3 = function (a, b) {
  return a + b;
};
console.log(sum3);
// ƒ (a, b) {
//     return a + b;
// }
console.log(sum3(1, 8)); //9

//case-1
console.log(sum4(1, 8)); //ReferenceError: Cannot access 'sum4' before initialization
const sum4 = function (a, b) {
  return a + b;
};

//case-2
console.log(sum5(1, 8)); //TypeError: sum5 is not a function
var sum5 = function (a, b) {
  return a + b;
};
