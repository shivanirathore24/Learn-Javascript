/* 
a = 10;
console.log(a); //10
*/

/*
console.log(a);
a = 10; // error: a is not defined
*/

/*
console.log(a); //undefined
var a = 10;
*/

/*
console.log(a);
let a = 10; //error: cannot access 'a' before initialization
*/

/*
let a = 10;
{
  console.log(a); //10
}
*/

let a = 10;
{
  console.log(a); //error: cannot access 'a' before initialization
  let a = 20;
}
