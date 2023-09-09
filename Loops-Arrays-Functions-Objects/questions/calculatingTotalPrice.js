/* Calculating Total Price
You run a shopping mall and to store customer's list you use a nested object consisting of different objects.
Requirements:
Create a function calculatePrice  which should take an object as it's parameter.
It should be able to calculate the total price after taking price and quantity into account for each product.
Input :
const goods = {
apple: { price: 150, quantity: 2 },
banana: { price: 75, quantity: 3 },
orange: { price: 125, quantity: 1 }
};   
console.log(calculatePrice(goods));

Output: 650 */

const goods = {
  apple: { price: 150, quantity: 2 },
  banana: { price: 75, quantity: 3 },
  orange: { price: 125, quantity: 1 },
};

function calculatePrice(goods) {
  let totalPrice = 0;
  for (let item in goods) {
    const { price, quantity } = goods[item];
    const itemTotalPrice = price * quantity;
    totalPrice += itemTotalPrice;
  }
  return totalPrice;
}

console.log(calculatePrice(goods));
