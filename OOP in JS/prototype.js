/* Prototypes: are the mechanism by which JavaScript objects inherit features from one another. 
In JavaScript, a prototype is a reference to another object that is used for property and method inheritance. 
Each object has a prototype, except for the base object.*/

function Movie(title) {
  this.title = title;
}

const movie1 = new Movie("The Avengers");
movie1.year = 2012;
console.log(movie1); //Movie {title: 'The Avengers', year: 2012}
console.log(movie1.__proto__); // Object, {constructor: ƒ} where f will be Movie
console.log(movie1.__proto__ === Object.prototype); //false
console.log(movie1.__proto__ === Movie.prototype); //true

const movie2 = new Movie("Avatar");
console.log(movie2); //Movie {title: 'Avatar'}
console.log(movie2.__proto__); // Object, {constructor: ƒ} where f will be Movie
console.log(movie2.__proto__ === Movie.prototype); //true

console.log(movie2.__proto__.__proto__); //Object
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} where constructor f is Object
console.log(movie2.__proto__.__proto__ === Object.prototype); //true
console.log(Object.__proto__); //ƒ () { [native code] }
console.log(movie2.__proto__.__proto__.__proto__); //null
