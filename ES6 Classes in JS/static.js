/* 
1-Static properties and methods are accessible through class name only.
2-Static methods in a class can only access other static methods and properties within the same class.
3-Subclasses inherit both static and non-static properties and can utilize them in their own implementation.
4-Static Methods are associated with the class itself rather than instances of the class, so they cannot be accessed 
or modified by subclasses. Subclasses can only inherit and use the static methods defined in the superclass.
5-In static methods, we can access the static properties using “this” keyword or using the name of the class.
*/

class Vehicle {
  static vName = "static Name";
  //constructor
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  //methods
  getDetails() {
    console.log(`
          The ${this.name} is ${this.color} in color.
          It has ${this.wheels} wheels.
          `);
  }
  //static method
  static showMsg() {
    console.log("This is the static method of the class");
  }
}

const v1 = new Vehicle("Car", "blue", 4);
console.log(v1);
// Vehicle {name: 'Car', color: 'blue', wheels: 4}
// [[Prototype]]: Object
//     constructor: class Vehicle
//     getDetails: ƒ getDetails()

// v1.showMsg(); //TypeError: v1.showMsg is not a function
Vehicle.showMsg(); //This is the static method of the class
console.log(Vehicle.vName); //static Name
