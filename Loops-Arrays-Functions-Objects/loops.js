/*********
 FOR LOOP - exact no. of iterations are known
*********/

//for(initialize; condition; operation){ //body }
for(let i=1; i<=50; i=i+2)
{
    console.log(i);
}


/***********
 WHILE LOOP - exact no. iteration required is uncertain or unknown.
 And we are depending on the specfic condition to be met but don't know how that condition will be met.
***********/

//while(condition){//body}
const num = 12345;
while(num !== 0)
{
    let digit = num % 10;
    num = parseInt(num/10);
    console.log(digit);
}


/**************
 DO WHILE LOOP - will be executed atleast once
**************/

//do{}while(condition)
let num2;
do{
    num = prompt("Enter a number");
}while(num2 <=50)