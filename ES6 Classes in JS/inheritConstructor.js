function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}
Vehicle.prototype.getVehDetails = function () {
  console.log(
    `Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`
  );
};

//without inheritance
/*
function Car(name, color, wheels, brand, seats) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
  this.brand = brand;
  this.seats = seats;
}

Car.prototype.getDetails = function () {
  console.log(`
          The ${this.color} ${this.name} is of ${this.brand} company.
          It has seating for ${this.seats} people`);
};
*/

/* Inheritance */
//Case-1
/*
function Car(color, brand, seats) {
  //Vehicle("car", "Blue", 4); //this will point to Vehicle not Car, so name, color, seat will be undefined in Car.
  Vehicle.call(this, "car", "Blue", 4); //this will point to Car, not Vehicle
  this.brand = brand;
  this.seats = seats;
}

Car.prototype.getDetails = function () {
  console.log(`
          The ${this.color} ${this.name} is of ${this.brand} company.
          It has seating for ${this.seats} people`);
};

const car1 = new Car("Black", "Audi", 5);
car1.getDetails();
console.log(car1);
//Car {name: 'car', color: 'Blue', wheels: 4, brand: 'Audi', seats: 5}
// [[Prototype]]: Object
//     getDetails: ƒ ()
//     constructor: ƒ Car(color, brand, seats)
console.log(car1.__proto__); //Object {getDetails: ƒ, constructor: ƒ}
car1.getVehDetails(); //TypeError: car1.getVehDetails is not a function becoz getVehDetails inside prototype of vehicle.
*/

//case-2
function Car(color, brand, seats) {
  //Vehicle("car", "Blue", 4); //this will point to Vehicle not Car, so name, color, seat will be undefined in Car.
  Vehicle.call(this, "car", "Blue", 4); //this will point to Car, not Vehicle
  this.brand = brand;
  this.seats = seats;
}

Car.prototype = Object.create(Vehicle.prototype); //now Vehicle's prototypw will be car's prototype

Car.prototype.getDetails = function () {
  console.log(`
        The ${this.color} ${this.name} is of ${this.brand} company.
        It has seating for ${this.seats} people`);
};

const car1 = new Car("Black", "Audi", 5);
car1.getDetails();
console.log(car1);
//Car {name: 'car', color: 'Blue', wheels: 4, brand: 'Audi', seats: 5}
// [[Prototype]]: Vehicle
//     getDetails: ƒ ()
//     [[Prototype]]: Object
//         getVehDetails: ƒ ()
//         constructor: ƒ Vehicle(name, color, wheels)

console.log(car1.__proto__);
// Vehicle {getDetails: ƒ}
//     getDetails: ƒ ()
//     [[Prototype]]: Object
//         getVehDetails: ƒ ()
//         constructor: ƒ Vehicle(name, color, wheels)

car1.getVehDetails();
// Name: car
// Color: Blue
// Wheels: 4
