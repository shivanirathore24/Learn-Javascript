/*
COFFEE DISTRIBUTER
Suppose you're working on a project where you need to process a list of customer orders for a coffee shop.

Requirement 1:
Each order is represented as an object with the following properties:
"orderNumber" - a unique number identifying the order
"items" - an array of objects representing the items ordered, where each item has a "name" and a "price" property
"discountCode" - a string representing a discount code for the order (optional).

Requirement 2:
You need to write a function "totalOrderValue" that takes an array of order objects and a callback function as its input and returns the total value of all orders combined after applying any applicable discounts.
The callback function, named "applyDiscount" should take two parameters: a discount code and total order value for a particular object, and applies the discount based on the following condition.
If the discount code is "COFFELOVER," apply a 10% discount.
If the discount code is “TEALOVER,” apply a 20% discount.
There may be cases where there is no discount code present in the order object.

Note:
You must use the map and reduce function to iterate over every object and to get the total value.
The final ans should be converted to 2 decimal places.
*/

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
  {
    orderNumber: 3,
    items: [
      { name: "Tea", price: 7.0 },
      { name: "Taj Tea", price: 2.75 },
    ],
  },
];
function totalOrderValue(orders, applyDiscount) {
  const orderTotals = orders.map((order) => {
    let total = order.items.reduce((acc, item) => acc + item.price, 0);
    if (order.discountCode) {
      total = applyDiscount(order.discountCode, total);
    }
    return total;
  });
  const grandTotal = orderTotals.reduce((acc, total) => acc + total, 0);
  return grandTotal.toFixed(2);
}

const applyDiscount = (discountCode, total) => {
  switch (discountCode) {
    case "COFFEELOVER":
      return total * 0.9;
    case "TEALOVER":
      return total * 0.8;
    default:
      return total;
  }
};

console.log(totalOrderValue(orders, applyDiscount));
