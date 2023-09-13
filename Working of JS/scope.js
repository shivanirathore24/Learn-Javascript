/** Scope in JS - Global, Function(Local), Block **/

//Global Scope
var varNum = 10;
let letnum = 20;
const constNum = 30;

function print() {
  //Function (Local Scope)
  var varLocal = 10;
  let letLocal = 20;
  const constLocal = 30;

  console.log(varNum, letnum, constNum); //10 20 30
  console.log(varLocal, letLocal, constLocal); //10 20 30
}
console.log(varNum, letnum, constNum); //10 20 30
print();

console.log(varLocal); //error - not defined
console.log(letLocal); //error - not defined
console.log(constLocal); //error - not defined

//Block Scope - let and const are block scope.
{
  var varBlock = 10;
  let letBlock = 20;
  const constBlock = 30;
  console.log(varBlock, letBlock, constBlock);
}
console.log(varBlock); //10
console.log(letBlock); //error - not defined
console.log(constBlock); //error - not defined
