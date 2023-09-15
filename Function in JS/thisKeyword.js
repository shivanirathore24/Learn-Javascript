/* this Keyword : points to the object */

//case-1
console.log(this); //Window Object

//case-2
var user = "Shiv";
console.log(window.user); //Shiv
console.log(this.user); //Shiv

//case-3
function checkThis1() {
  console.log(this); //Window Object
}
checkThis1();

/*
'use strict';
function checkThis2() {
  console.log(this); //undefined
}
checkThis2(); */

//case-4
const user1 = {
  userName: "Shiv",
  userAge: 24,
  work: function () {
    console.log(this);
  },
};
user1.work(); //{userName: 'Shiv', userAge: 24, work: ƒ}

//case-5
const user2 = {
  userName: "Abhi",
};
user2.work = user1.work;
console.log(user2); //{userName: 'Abhi', work: ƒ}
user2.work(); //{userName: 'Abhi', work: ƒ}

//case-6: in case of arrow function, 'this' points to parent scope.
const checkArrow = () => {
  console.log(this);
};
checkArrow(); //Window object
