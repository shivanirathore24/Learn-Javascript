/* 
find() and findIndex() in JS :  
the find() method returns the element value, but the findIndex method returns the element index
*/

const inputs = [22, 13, 15, 77, 65, 98, 76, 44, 55, 65];

const find1 = inputs.find((num) => num == 65);
console.log(find1); //65

const find2 = inputs.find((num) => num == 64);
console.log(find2); //undefined

const find3 = inputs.find((num) => num > 65);
console.log(find3); //77

const find4 = inputs.findIndex((num) => num == 65);
console.log(find4); //4
