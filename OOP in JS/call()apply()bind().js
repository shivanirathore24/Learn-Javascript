/* call(), apply(, bind() in JS*/
const car = {
  name: "car",
  color: "black",
  getDetails(brand, seats) {
    console.log(
      `This is a ${this.color} ${this.name} of ${brand} company. It has ${seats} seats.`
    );
  },
};
car.getDetails("Audi", 5); //This is a black car of Audi company. It has 5 seats.

const bus = {
  name: "bus",
  color: "blue",
};

/*
When to use bind () call () and apply () in JavaScript?
call : binds the this value, invokes the function, and allows you to pass a list of arguments. 
apply : binds the this value, invokes the function, and allows you to pass arguments as an array. 
bind : binds the this value, returns a new function, and allows you to pass in a list of arguments.
*/

//we want to use getDetails() of car objects in bus objects: re-useability
car.getDetails.call(bus, "star", 50); //This is a blue bus of star company. It has 50 seats.
car.getDetails.apply(bus, ["Gold", 30]); //This is a blue bus of Gold company. It has 30 seats.
const veh1 = car.getDetails.bind(bus); //bind() uses same function call for different arguments
veh1("silver", 20); //This is a blue bus of silver company. It has 20 seats.
veh1("bronze", 45); //This is a blue bus of bronze company. It has 45 seats.
