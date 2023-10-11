/* Getter and Setter - To provide controlled access and manipulation of private properties and 
make properties accessible from outside the object. */

//Case-4: getter and setter - setting property based on some condition
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    if (newDiameter >= 0) {
      this.radius = newDiameter / 2;
    } else {
      console.log("Invalid Input");
    }
  }
}

const circle = new Circle(4);
console.log(circle.radius); //4
console.log(circle.diameter); //8
circle.radius = 6;
console.log(circle.diameter); //12
circle.diameter = 20;
console.log(circle.radius); //10
console.log(circle.diameter); //20
circle.diameter = -2;
console.log(circle.radius); //Invalid Input

/*

//Case-1 : without setter and getter
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getDiameter() {
      console.log(this.radius * 2);
    }
  }
  const circle = new Circle(4);
  console.log(circle.radius); //4
  circle.getDiameter(); //8
  
  
  //Case-2: getter
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  }
  
  const circle = new Circle(4);
  console.log(circle.radius); //4
  console.log(circle.diameter); //8 (getter --> access method as property)
  circle.diameter = 16;
  console.log(circle.diameter); //8 -->won't change becoz the radius is not changed.
  circle.radius = 8;
  console.log(circle.diameter); //16
  
  
  //Case-3: setter
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    set diameter(newDiameter) {
      this.radius = newDiameter / 2;
    }
  }
  
  const circle = new Circle(4);
  console.log(circle.radius); //4
  console.log(circle.diameter); //8
  circle.diameter = 20;
  console.log(circle.radius); //10
  console.log(circle.diameter); //20
  circle.diameter = -2;
  console.log(circle.radius); //-1

  */
