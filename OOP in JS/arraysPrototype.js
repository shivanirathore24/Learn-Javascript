/* rototype allows you to add new properties and methods to arrays. 
prototype is a property available with all JavaScript objects  */

const inputs = [1, 2, 3, 4, 5];
console.log(inputs.__proto__); //Array
console.log(inputs.__proto__.__proto__); //Object
console.log(inputs.constructor === Array); //true, Arrays in JavaScript are instances of the Array constructor.

const arr = [24, 7, 13];
console.log(arr.__proto__); //[constructor: ƒ Array() , at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(arr.__proto__ == Array.prototype); //true
console.log(arr.__proto__.__proto__ === Object.prototype); //true
/*
In JavaScript, the __proto__ property of an object points to its prototype. For an array instance, 
its __proto__ points to Array.prototype. Since Array.prototype is an object itself, its __proto__ points 
to Object.prototype */
