/* Reversing a string : Complete the function reverseString(), which accepts a string as its parameter, reverses it, and returns the string.
Note - Do not use any loop in implementation. 
You can use methods like split() , join() and reverse() to solve the problem. */

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));        //olleH