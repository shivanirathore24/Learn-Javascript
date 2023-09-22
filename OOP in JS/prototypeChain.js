/* 
1- Javascript is a prototype based language.
2- In JavaScript, the prototype chain refers to the mechanism by which objects can inherit 
properties and methods from their parent objects or prototypes.
3- Object literals are created as instances of the base Object constructor. Therefore, their prototype 
is Object.prototype. The Object.getPrototypeOf() method returns the prototype of the specified object.
*/

/*Example-1 */
const car = {
  //car object
  name: "BMW",
};
console.log(car.__proto__); //Object
console.log(car.__proto__ === Object.prototype); //true
console.log(Object.getPrototypeOf(car)); //Object

/* Example-2 */
/*
//case-1 - getDetails() function is getting copied for all objects, more memory gets utilize may cause performance issue.
function Movie(title) { //constructor
  this.title = title;
  this.getDetails = function () {
    console.log(`Title: ${this.title}`);
  };
}
const movie1 = new Movie("The Avengers");
movie1.year = 2012;
console.log(movie1); //Movie {title: 'The Avengers', year: 2012, getDetails: ƒ}
console.log(movie1.__proto__); //Object

const movie2 = new Movie("Avatar");
console.log(movie2); //Movie {title: 'Avatar', getDetails: ƒ}
*/

//case-2
/*We have created method in the prototype which will not be copied to all objects. It will only be inherited. 
Improved memory efficiency by adding methods to the prototype chain instead of creating copies for each Movie object. */
function Movie(title) {
  this.title = title;
}
Movie.prototype.getDetails = function () {
  console.log(`Title: ${this.title}`);
};

const movie1 = new Movie("The Avengers");
movie1.year = 2012;
console.log(movie1); //Movie {title: 'The Avengers', year: 2012}
/*
title:"The Avengers"
year: 2012
[[Prototype]]: Object
*/
console.log(movie1.__proto__); //Object, {getDetails: ƒ, constructor: ƒ Movie(title)}
console.log(movie1.__proto__ === Object.prototype); //false
/* getDetails: ƒ ()
constructor: ƒ Movie(title)
[[Prototype]]: Object */

movie1.getDetails(); //Title: The Avengers
/* You can access getDeatils() function, becoz it's presenr in the prototype pf movie1.
But it won't make copy of method, it will just inherit method from prototype */

const movie2 = new Movie("Avatar");
console.log(movie2); //Movie {title: 'Avatar'}
movie2.getDetails(); //Title: Avatar

/* Example-3 */
function Person(name) {
  this.name = name;
}
Person.prototype.age = 23;
const shiv = new Person("shiv");
shiv.__proto__.age = 24;

console.log(shiv.age); //24
console.log(Person.prototype.age); //24
/* Person.prototype.age is initially set to 23. However, by accessing shiv.__proto__.age and setting it to 24, 
the value of age is modified for all instances of Person, including shiv. As a result, shiv.age will be 24, 
and Person.prototype.age will also be 40. */
