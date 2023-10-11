/* Constructor - case1 */
function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;

  this.getDetails = function () {
    console.log(`
        The ${this.name} is ${this.color} in color. It has ${this.wheel} wheels.
        `);
  };
}

const car = new Vehicle("Car", "Blue", 4);
console.log(car);
console.log(car.hasOwnProperty("name")); //true
console.log(car.hasOwnProperty("getDetails")); //true


/* Constructor - case2 */
function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;

  Vehicle.prototype.getDetails = function () {
    console.log(`
          The ${this.name} is ${this.color} in color. It has ${this.wheel} wheels.
          `);
  };
}

const car1 = new Vehicle("Car", "Blue", 4);
console.log(car1);
console.log(car1.hasOwnProperty("name")); //true
console.log(car1.hasOwnProperty("getDetails"));
//false, we have extracted getDetails method from constructor function & method getDetails gets created in inside prototype.


/* Class - case3 */
class VehicleCl {
  //property
  name;
  color;
  wheel;

  //constructor
  constructor(name, color, wheel) {
    this.name = name;
    this.color = color;
    this.wheel = wheel;
  }

  //methods
  getDetails() {
    console.log(`
          The ${this.name} is ${this.color} in color. It has ${this.wheel} wheels.
          `);
  }
}

const veh1 = new VehicleCl("Scooty", "Grey", 2);
console.log(veh1.hasOwnProperty("name")); //true
console.log(veh1.hasOwnProperty("getDetails")); //false
