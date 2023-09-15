/* Higher Order Function: allows for the abstraction and re-use of logic, making the code more concise
ans easier to understand and maintain. */

//without higher order function
const inputs = [2, 5, 7, 8, 9, 12, 20];

function square(input){
    const squared = [];
    for(let num of inputs){
        squared.push(num * num);
    }
    return squared;
}

function cubic(input){
    const cubes = [];
    for(let num of inputs){
        cubes.push(num * num * num);
    }
    return cubes;
}

//higher order function
function calculate(input, operation) {
    const output = [];
    for (let number of input) {
      output.push(operation(number));
    }
    return output;
  }
  
  function cubic(number) {
    return number * number * number;
  }
  
  function square(number) {
    return number * number;
  }
  
  const cube3 = calculate(inputs, cubic);
  console.log(cube3);
  const square2 = calculate(inputs, square);
  console.log(square2);
  

