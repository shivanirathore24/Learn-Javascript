//Pure Function
function calculate(num1, num2) {
  return num1 * num2;
}
console.log(calculate(4, 7)); //28

//Impure Function
const discount = 25;
function calcDis(price) {
  return price - discount;
}
console.log(calcDis(100)); //75
