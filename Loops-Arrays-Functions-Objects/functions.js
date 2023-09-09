/*********
FUNCTIONS
*********/

function greetUser()
{
   console.log("Welcome to the session! ");
}

greetUser();   //function call


function greetUser(username)       //function defintion with parameter
{
   console.log("Welcome "+username+" to the session! ");
}

greetUser("Shiv");     //function call with argument



/*****************
DEFAULT PARAMETER
*****************/

function sum(num1=0, num2=0){
    console.log("Sum of the number: "+ (num1+num2));
    console.log(`Sum of the number: ${num1 + num2}`);
  }
 
sum(4, 5);
sum(4);
sum();



/****************
RETURN STATEMENT
****************/

function sqaured(number)
{
    return number*number;
}

const sqauredfive = squared(5);
console.log(sqauredfive);       //25


function getValue()
{
    //JS interprets it as the comma operator, which evaluates each expression but only returns the value of the last expression.
    return 1, 2, 3;
}
var result = getValue();
console.log(result);    //3





 