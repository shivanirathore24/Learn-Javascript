/* filter() Function : JS Higher Order Function 
The JavaScript filter array function is used to filter an array based on specified criteria.
After filtering it returns an array with the values that pass the filter.
The JavaScript filter function iterates over the existing values in an array and returns the values that pass.
*/

const inputs = [4, 10, 2, -3, -2, 5, 9, -1];

const positives = inputs.filter(noNegative);
function noNegative(num) {
  return num > 0;
}
console.log(positives); //[4, 10, 2, 5, 9]

const negatives = inputs.filter((num) => num < 0);
console.log(negatives); //[-3, -2, -1]
