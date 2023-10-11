/*
Encapsulation enhances code modularity and organization by grouping related data and operations together, promoting 
information hiding. It leads to cleaner, more maintainable code and improves the overall structure and readability 
of a program.
Declaring public property is optional but compulsory to declare private property.
*/

class VehicleCl {
  #regNumber; //private property

  constructor(name, color, wheels, number) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.#regNumber = number;
  }

  #getNumber(number) {
    //private method will br created inside PrivateMethods
    return number;
  }

  getDetails() {
    //public method will be created inside prototype
    console.log(`This ${this.name} is ${this.color} in color. It has ${
      this.wheels
    } wheels. 
        Registration number is ${this.#getNumber(this.#regNumber)}.
        `);
  }
}

const veh1 = new VehicleCl("Scooty", "Grey", 2, 8758);
console.log(veh1);
/*
VehicleCl {name: 'Scooty', color: 'Grey', wheels: 2, #regNumber: 8758}
[[Prototype]]: Object
constructor: class VehicleCl
getDetails:  getDetails()
[[PrivateMethods]]: PrivateMethods[1]
0: #getNumber(number) { return number; } {name: '#getNumber', value: ƒ}
*/

veh1.name = "Bike";
//veh1.#getNumber = 8858;  --error
//console.log(veh1.#getNumber); --error
veh1.getDetails(); //This Scooty is Grey in color. It has 2 wheels. Registration number is 8758.
//veh1.#getNumber(); --error
