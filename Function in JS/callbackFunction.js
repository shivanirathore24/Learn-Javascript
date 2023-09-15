//CallBack Function - when you use function as a parameter/ argument.

function greet(wish) {
  console.log(`${wish()}, Welcome to the JavaScript Course !`);
}

function sayHi() {
  return "Hi";
}

function sayHello() {
  return "Hello";
}

function goodMorning() {
  return "Good Morning";
}

greet(sayHi);   //Hi, Welcome to the JavaScript Course !
greet(sayHello);    //Hello, Welcome to the JavaScript Course !
greet(goodMorning);     //Good Morning, Welcome to the JavaScript Course !
