const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);   //ignored, already exists

console.log(mySet.size);        //3
console.log(mySet.has(2));      //true

mySet.delete(3);
console.log(mySet.size);        //2

mySet.clear();
console.log(mySet.size);        //0

