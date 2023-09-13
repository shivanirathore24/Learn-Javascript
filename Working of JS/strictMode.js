/*
'use strict';
a = 10;
console.log(a); //error: a is not defined
*/

/*
//without strict mode
let value = 10;
if (value) {
  valeu = 20; //spelling mistake
}
console.log(value); //10
*/

"use strict";
let value = 10;
if (value) {
  valeu = 20; //error: valeu is not defined
}
console.log(value); 
