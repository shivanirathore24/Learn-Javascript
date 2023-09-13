/* Closure in JS allows inner function to access the outerscope of a function */

let a = "Global";

function outerPrint() {
  let b = "OuterPrint";

  return function innerPrint() {
    let c = "innerPrint";
    return `${a} -> ${b} -> ${c}`;
  };
}

const show = outerPrint();
console.log(show);
// ƒ innerPrint() {
//     let c = "innerPrint";
//     return `${a} -> ${b} -> ${c}`;
//   }

const printInner = show();
console.log(printInner); //Global -> OuterPrint -> innerPrint
