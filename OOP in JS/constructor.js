/* factory function equivalent to constructor */
function movie(title, year) {
  const movieObj = {
    title: title,
    year: year,
    getDetails() {
      console.log(`
                Title: ${this.title}
                Year: ${this.year}
            `);
    },
  };
  return movieObj;
}

const movie1 = movie("The Avengers", 2012);
console.log(movie1); //{title: 'The Avengers', year: 2012, getDetails: ƒ}
movie1.getDetails();
// Title: The Avengers
// Year: 2012


/* Constructor Function - used to create a new object and set values for any existing object properties */
function Movie(title, year) {
  this.title = title;
  this.year = year;
  this.getDetails = function () {
    console.log(`
        Title: ${this.title}
        Year: ${this.year}
        `);
  };
}

//creating object using new keyword
const movie2 = new Movie("Avatar", 2013);
console.log(movie2); //Movie {title: 'Avatar', year: 2013, getDetails: ƒ}
movie2.getDetails();
// Title: Avatar
// Year: 2013

/*
1- When using the 'new' keyword in JavaScript, 'this' is automatically bound to the newly created object,
there's no need for an explicit return statement, and memory is allocated for this new object.
2- Arrow functions do not have their own “this” context, and they lexically bind this to the enclosing scope. 
As a result, when an arrow function is used as a constructor function with the 'new' keyword, it does not create a 
new instance of an object. Instead, it inherits this from the enclosing scope, which is typically the global 
object or the object that contains the arrow function.
*/
