/* Object.create(proto) is used to create a new object with proto as its prototype. */
const car = {
  getDetails(name) {
    console.log(`Your car is ${name}`);
  },
};

//This allows car1 to inherit car properties, and have its own unique ones.
const car1 = Object.create(car);
console.log(car1); //{}
car1.getDetails(); //Your car is undefined
console.log(car1.__proto__);
/*
{getDetails: ƒ} i.e car
getDetails: ƒ getDetails(name)
[[Prototype]]: Object
*/
