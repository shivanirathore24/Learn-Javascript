//Class declaration
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
console.log(veh1); //VehicleCl {name: 'Scooty', color: 'Grey', wheel: 2}
veh1.getDetails(); //The Scooty is Grey in color. It has 2 wheels.

//Class Expression
/*
const vehicle = class{

}
*/
