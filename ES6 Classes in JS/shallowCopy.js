//case-3 - Shallow copy copies values/properties of first layer but if there is object inside object , then
// values/properties won't be copied but reference will be copied. for eg: here for marks object.
const user1 = {
  username: "Sara",
  age: 12,
  marks: {
    maths: 20,
    eng: 25,
  },
};

const user2 = Object.assign({}, user1);
console.log(user2); //{username: 'Sara', age: 12, marks:{maths: 10, eng: 25}}
// so after copy, here intial value of maths: 20 which is overridden by 10 after making change
console.log(user1); //{username: 'Sara', age: 12, marks:{maths: 10, eng: 25}}
// so after copy, here intial value of maths: 20 which is overridden by 10 after making change

user2.username = "Harry";
user2.marks.maths = 10;
console.log(user2); //{username: 'Harry', age: 12, marks:{maths: 10, eng: 25}}
console.log(user1); //{username: 'Sara', age: 12, marks:{maths: 10, eng: 25}}

/*
//Case-1
const user1 = {
  username: "Sara",
  age: 12,
};

//here,we are copying the reference of user1 into user2. So, any change made to user2 will be reflected to user1.
// so, no sense to create another Object.
const user2 = user1;
console.log(user2); //{username: 'Sara', age: 12}
console.log(user1); //{username: 'Sara', age: 12}
user2.username = "Harry";
console.log(user2); //{username: 'Harry', age: 12}
console.log(user1); //{username: 'Harry', age: 12}
*/

/* Case-2 : Shallow Copy using - spread operator & Object.assign */
/*
//Way-1: using spread operator
const user1 = {
  username: "Sara",
  age: 12,
};

const user2 = { ...user1 };
console.log(user2); //{username: 'Sara', age: 12}
console.log(user1); //{username: 'Sara', age: 12}
user2.username = "Harry";
console.log(user2); //{username: 'Harry', age: 12}
console.log(user1); //{username: 'Sara', age: 12}


//Way-2: using Object.assign
const user1 = {
  username: "Sara",
  age: 12,
};

const user2 = Object.assign({}, user1);
console.log(user2); //{username: 'Sara', age: 12}
console.log(user1); //{username: 'Sara', age: 12}
user2.username = "Harry";
console.log(user2); //{username: 'Harry', age: 12}
console.log(user1); //{username: 'Sara', age: 12}
*/
