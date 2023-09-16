/*
PIZZA PRICING
You are tasked with creating a program to calculate the price of a pizza based on its size, quantity and selected toppings.
Objectives:
The pricing is determined as follows:
- The base price of the pizza depends on its size, which can be small, medium, or large.
Small: $8.00
Medium: $10.00
Large: $12.00
- Each topping selected for the pizza incurs an additional cost of $1.50 per topping.
Write a JavaScript function pizzaPricing, that takes the size of the pizza as a parameter in form of string and returns a curried function.
The curried function should take an array of selected toppings as a parameter and return another function. The final function
should take the quantity of pizzas as a parameter, calculate the total price and return the total price.
Implement the pizzaPricing function and ensure that the returned function correctly calculates the total price based on the given parameters.
Note:
The final result should be up to 2 decimal places.
*/

function pizzaPricing(size) {
  const basePrice = {
    small: 8.0,
    medium: 10.0,
    large: 12.0,
  };

  return function (selectedToppings) {
    return function (quantity) {
      const toppingsCost = selectedToppings.length * 1.5;
      const totalPrice = basePrice[size] + toppingsCost;
      return (totalPrice * quantity).toFixed(2);
    };
  };
}

const smallPizza = pizzaPricing("small");
const addToppings = smallPizza(["pepperoni", "extra cheese"]);
const totalPrice = addToppings(3);

console.log("Total Price:", totalPrice); //Total Price: 33.00
