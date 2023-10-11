/* Build-in Classes in JS */
const today = new Date();
console.log(today); //Tue Oct 10 2023 21:17:10 GMT+0530 (India Standard Time)

const birthDate = new Date("1999-09-24");
console.log(birthDate); //Fri Sep 24 1999 05:30:00 GMT+0530 (India Standard Time)

const someDay = new Date(1990, 7);
console.log(someDay); //Wed Aug 01 1990 00:00:00 GMT+0530 (India Standard Time)
/*
For passing date as number,
0 - Jan
1 - Feb
6- July
7 - Aug
*/

console.log(birthDate.getFullYear()); //1999

console.log(birthDate.toDateString()); //Fri Sep 24 1999
const birthStr = birthDate.toString();
console.log(birthStr.slice(4, 24)); //Sep 24 1999 05:30:00
