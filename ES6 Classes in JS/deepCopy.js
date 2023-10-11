/*
1-Deep copy can be used where we want to create a copy and perform changes without affecting the original object.
2-Deep Copy will copy value/properties of  second layer of objects i.e object inside pobk
As we are using JSON method for deep copy but Json can't have function, expression or data object.
JSON.stringify --> coverts objects into string
JSON.parse --> converts string into objects ( but in different m/m location).
4-Shallow copy only copies the values of the top-level elements otherwise, references of the underlying 
variable are passed, while deep copy copies all element’s values, including nested objects or arrays.
*/

//Case-2
const user1 = {
  username: "Sara",
  age: 12,
  marks: {
    maths: 20,
    eng: 25,
  },
  getMarks() {
    console.log(this.marks);
  },
};

const user2 = JSON.parse(JSON.stringify(user1));
console.log(user2); //{username: 'Sara', age: 12, marks: {maths: 10, eng: 25}}
// so after copy, here intial value of maths: 20 which is overridden by 10 after making change
//and function won't be copied as we are using JSON method for deep copy.
console.log(user1); //{username: 'Sara', age: 12, marks: {maths: 20, eng: 25}, getMarks: ƒ}

user2.username = "Harry";
user2.marks.maths = 10;
console.log(user2); //{username: 'Harry', age: 12, marks: {maths: 10, eng: 25}}
console.log(user1); //{username: 'Sara', age: 12, marks:{maths: 20, eng: 25}, getMarks: ƒ}

//Case-1
/*
const user1 = {
  username: "Sara",
  age: 12,
  marks: {
    maths: 20,
    eng: 25,
  },
};

const user2 = JSON.parse(JSON.stringify(user1));
console.log(user2); //{username: 'Sara', age: 12, marks:{maths: 10, eng: 25}}
// so after copy, here intial value of maths: 20 which is overridden by 10 after making change
console.log(user1); ////{username: 'Sara', age: 12, marks:{maths: 20, eng: 25}}

user2.username = "Harry";
user2.marks.maths = 10;
console.log(user2); //{username: 'Harry', age: 12, marks:{maths: 10, eng: 25}}
console.log(user1); ////{username: 'Sara', age: 12, marks:{maths: 20, eng: 25}}
*/
