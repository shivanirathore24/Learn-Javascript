/* Inheritance
1-Once the super constructor is executed, the properties of the parent class become part of the subclass. 
So the properties can be accessed using this keyword.
2-The private member of a class is bound only to the class itself it can’t be inherited by the subclass.
*/

class VehicleCl {
  constructor(name, color, wheel) {
    this.name = name;
    this.color = color;
    this.wheel = wheel;
  }

  getDetails() {
    console.log(`
            The ${this.name} is ${this.color} in color. It has ${this.wheel} wheels.
            `);
  }
}

//without inheritance - repitition of code
/*
class Car {
  constructor(name, color, wheel, brand, purpose) {
    this.name = name;
    this.color = color;
    this.wheel = wheel;
    this.brand = brand;
    this.purpose = purpose;
  }

  getDetails() {
    console.log(`
            The ${this.name} is ${this.color} in color. It has ${this.wheel} wheels.
            `);
  }
}
*/

//Case-1
/*
class Car extends VehicleCl {
  constructor(color, brand, purpose) {
    super("car", color, purpose);
    this.brand = brand;
    this.purpose = purpose;
  }
}

const car1 = new Car("Red", "Audi", "Luxury Travelling");
car1.getDetails(); //The car is Red in color. It has Luxury Travelling wheels. --calling parents method
console.log(car1);
// Car {name: 'car', color: 'Red', wheel: 'Luxury Travelling', brand: 'Audi', purpose: 'Luxury Travelling'}
//  [[Prototype]]: VehicleCl
//         constructor: class Car
//         [[Prototype]]: Object
//              constructor: class VehicleCl
//              getDetails: ƒ getDetails()   --method of Vehicle class is created inside prototype of VehicleCl
*/

//Case-2
class Car extends VehicleCl {
  constructor(color, brand, purpose) {
    super("car", color, purpose);
    this.brand = brand;
    this.purpose = purpose;
  }

  //Overriding method but if method is not in child class then parent class method will be called.
  getDetails() {
    console.log(`
                  The ${this.name} is ${this.color} in color of ${this.brand} company. It is for the ${this.purpose}.
        `);
  }
}
const car2 = new Car("Red", "Audi", "Luxury Travelling");
car2.getDetails(); //The car is Red in color of Audi company. It is for the Luxury Travelling.
console.log(car2.__proto__); //VehicleCl
console.log(car2);
// Car {name: 'car', color: 'Red', wheel: 'Luxury Travelling', brand: 'Audi', purpose: 'Luxury Travelling'}
//  [[Prototype]]: VehicleCl
//         getDetails: ƒ getDetails()   --method of class Car is created inside prototype of Car
//         constructor: class Car
//         [[Prototype]]: Object
