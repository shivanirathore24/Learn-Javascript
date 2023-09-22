/* Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables. */

const obj = {
  a: 1,
  b: 2,
  c: ["S", "H", "I", "V"],
  d: { value: "val" },
  e: 7,
};

//Binding Pattern
const { a, c } = obj; //equivalent to const a = obj.a; const b = obj.b;
console.log(a); //1
console.log(c); //['S', 'H', 'I', 'V']

// b property of obj is renamed as b1
const { b: b1 } = obj;
console.log(b1);
//console.log(b); //ReferenceError: b is not defined

//Assignment  Pattern
let e;
({ e: e } = obj); //{e: variable, e: property of obj}
console.log(e); //7
