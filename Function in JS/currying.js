/* Currying in JS */

//without currying
function add1(a, b, c) {
  return a + b + c;
}
console.log(add1(2, 3, 4)); //9

//currying
function add2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add2(2)(3)(4)); //9

//without currying
function power(a, b) {
  return b ** a;
}

//currying
function power(b) {
  return function (a) {
    return a ** b;
  };
}

const square = power(2);
console.log(square);
// ƒ (a) {
//     return a ** b;
//   }

console.log(square(4)); //16
console.log(square(3)); //9
console.log(square(11)); //121

const cube = power(3);
console.log(cube(4)); //64
console.log(cube(2)); //8
