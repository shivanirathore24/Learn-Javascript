/* Function returning function */
function greet(message) {
  return function (wishes) {
    console.log(`${wishes}, ${message}`);
  };
}

const greeting = greet("I hope you're doing well");
console.log(greeting);
// ƒ (wishes) {
//     console.log(`${wishes}, ${message}`);
//   }
greeting("Hello"); //Hello, I hope you're doing well

//OR

greet("I hope you're doing well")("Hello"); //Hello, I hope you're doing well
