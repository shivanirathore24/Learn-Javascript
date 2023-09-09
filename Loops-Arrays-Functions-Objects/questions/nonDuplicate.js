/* Non Duplicate Array
Write a javascript program to merge two arrays while removing all the duplicates from the array.
Requirements: The function mergeArray() should accept two arrays as parameters..
The order of the elements should be preserved, i.e., The elements of the final array should be in the same order as they were present in the merging array.
The function should return the newly merged array
Hint : Use the concept of Set data structure to solve this problem. */

//complete the function mergeArray
arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    // Create a Set to store unique elements from arr1
  let uniqueSet = new Set(arr1);

  // Iterate through arr2 and add its elements to uniqueSet
  for (let element of arr2) {
    uniqueSet.add(element);
  }

  // Convert uniqueSet back to an array to preserve order
  let mergedArray = [...uniqueSet];

  return mergedArray;
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]