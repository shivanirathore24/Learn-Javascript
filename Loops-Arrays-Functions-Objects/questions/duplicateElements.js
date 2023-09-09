/* Array of duplicate elements
Create a function to get all the duplicate elements from an array.
Requirements: The function findDuplicate should take an array as a parameter.
Create a new Array of all the duplicate elements present in the array 
Should return the newly formed array. */


let arr = [4, 2, 34, 4, 1, 12, 1, 4,12,];

let arry=[];
let seen = {};
function findDuplicate(arr){
for(let i = 0; i < arr.length; i++){
    let ite = arr[i];
    if(seen[ite]  ){
        if(!arry.includes(ite)){
            arry.push(ite);
        }
        
    }else {
            seen[ite] = 1;
        }
}
return arry;
} 

console.log(findDuplicate(arr));