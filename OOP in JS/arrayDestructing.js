/*The destructing array, makes it possible to unpack values from arrays, or properties from objects, into distinct variables. */

const fruits = ["Apple", "Mango", "Kiwi", "Berry", "Banana", "Lichi"];

//Binding Pattern
const [a, m] = fruits;
console.log(a, m); //Apple Mango

const [a1, , k] = fruits;
console.log(a1, k); //Apple Kiwi

const [a2, , , k1] = fruits;
console.log(a2, k1); //Apple Berry

const [a4, m1, ...f] = fruits;
console.log(f); //['Kiwi', 'Berry', 'Banana', 'Lichi']

const [a5, m3, ...[, be, ba]] = fruits;
console.log(be, ba); //Berry Banana

//Using array destructuring, we can swap two numbers without using any third temporary variables.
let num1 = 10;
let num2 = 20;
[num1, num2] = [num2, num1];
console.log(num1, num2); //20 10
