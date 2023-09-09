/*
Deleting occurrence of an element
Create a function to delete all the occurrences of an element in an array without using any other array.
The function deleteOccur should take two parameters, an array, and the element to be deleted from the array and it should return the updated array.
*/


let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr,ele){
   //Implement Your function here
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ele) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(deleteOccur(arr,ele));
//Output: [23,4,78,5,63,45,210];