console.log("JS Fundamentals!");


/***************************
Variables : let, const, var
***************************/
console.log("***Variables***");

let age = 24;
console.log(age);
age = 'ten';
console.log(age);

const pi = 3.14;
// pi = 3;      //error
console.log(pi);  



/*******************
PRIMITIVE DATA TYPE
*******************/
console.log("***Primitive Data Type***");

// Number (64 bit)
let num = 24;
console.log(typeof num);    //number

// String
const firstName = 'Shivani';
const lastName = "Rathore";
const nickName = `Shiv`;
console.log(typeof firstName);   //string
console.log(typeof lastName);   //string
console.log(typeof nickName);   //string

//Booleam
let bool = false;
console.log(typeof bool);   //boolean


//Undefined
let a;
console.log(typeof a);      //undefined
console.log(a);     //undefined

//Null
let b = null;
console.log(b);     //null
console.log(typeof b);      //object - Bug in JS for some legacy reason wasn't removed

//BigInt
let num1 = 10n;
console.log(typeof num1);   //bigint

//Interesting thing about data type
console.log(Number.MAX_VALUE);      //1.7976931348623157e+308
console.log(Number.MIN_VALUE);      //5e-324
console.log(Number.MAX_VALUE * 10);     //Infinity  
console.log(Infinity/Infinity);     
/* The NaN is a special value in JavaScript that represents
the result of an operation that cannot be expressed as a valid number. */ 

console.log(12/0);      //Infinity
console.log(24/Infinity);       //0

let num2 = Infinity;
console.log(num2);      //Infinity
console.log(typeof num2);       //number



/****************
 BASIC OPERATORS
****************/
console.log("***Basic Operator***");

//Arithmetic (+ ,- ,* ,/ ,% ,** ,++ ,-- )
console.log(10/5);     //2
console.log(10%5);     //0
console.log(2**3);     //8

let x = 10;
x++;
x--;
x--;
console.log(x);    //9

//Assignment (= ,+= ,-= ,*= ,/= ,%= ,**= )
let c = 5;
c += 2;
console.log(c);    //7

// Comparision (< ,> ,<= ,>= ,== ,!= ,=== ,!==) - returns boolean value
console.log(5 == 5);     //true
console.log(5 != 8 );    //true

console.log(5 == '5');      //true
console.log(5 === '5');     //false - compares both value as well as data type.

console.log( 5 != '5');     //false
console.log(5 !== '5');     //true

/*Logical (&& ,|| ,!)
&& : returns last truthy value and first falsy value.
|| : returns first truthy value and last falsy value.
Falsy value in JavaScript: 0 ,""(empty string) ,null ,undefined ,false, NaN.
for eg: Any number except zero is considred truthy value.
        Any string except empty string is considered truthy value.
*/

console.log(true && true);      //true
console.log(true && 1);     //1
console.log(5 && 1);      //1

console.log(0 || false || '' || null);      //null
console.log(0 || 7 || '' || null);      //7

console.log(!0);    //true
console.log(!1);    //false

//Bitwise (>> ,<< ,& ,| ,^ ,~ )



/************************************
 TYPE COERCION - implicit conversion
 ************************************/
 console.log("***Type Coercion***");

console.log(5 + 5);     //10 - number
console.log( '5' + 5);      // 55 - string

let num3 = '5' + 5;     //number is converted into string
console.log(typeof num);    //string

let fullName = "Shivani" + " " + "Rathore";
console.log(fullName);      //SHivani Rathore

let sub = '55' - 10;
console.log(sub);       // 45 - string is converted into number

console.log(4 ** 2);        // 8

console.log(true + true);   //2 
/* true is used in numeric context, it is automatically converted to number 1.
true + true is equivalent to 1 + 1 which is 2. */



/*************************************
 TYPE CONVERSION - explicit conversion
**************************************/
console.log("***Type Conversion***");

/* Convert to String - using String(), toString() */
//String();
console.log(String(100));      //100 , typeof - string
console.log(String(true));     //true, typeof - string
console.log(String(null));     //null, typeof - string
console.log(String(undefined));        //undefined, typeof - string

//toString();
console.log((123).toString());
//console.log(null.toString());        //error - toString() method can't covert "null" and "undefined" to string type.
//console.log(undefined.toString());     //error - toString() method can't covert "null" and "undefined" to string type.

/* Convert to Number - Number(); */
console.log(Number('25'));     //25
console.log(Number('Value'));      //Nan - not a valid number
console.log(Number(true));     //1
console.log(Number(true));     //0

/* Unary + operator - works on variable */
let shiv = "24";
console.log(+a);       //123 

let num4 = "24shiv";
console.log(+b);       //NaN

/* parseInt(); -strictly integer */
console.log(parseInt('12345'));        //12345
console.log(parseInt('24shiv'));       //24
console.log(parseInt('shiv24'));       //NaN
console.log(parseInt('123.45f'));      //123

/* Convert to Float - parseFloat(); */
let num5 = 1.2;
console.log(parseFloat(num5));       //1.2
console.log(parseFloat('123.45f'));       //123.45
console.log(parseFloat("12.34.45"));     //12.34

/* Convert to Boolean - Boolean() */
console.log(Boolean(0));        //false
console.log(Boolean(24));       //true
console.log(Boolean(''));       //false
console.log(Boolean('Shiv'));    //true
console.log(Boolean(undefined));     //false
console.log(Boolean(null));     //false



/********
 IF ELSE 
********/
console.log("***If-Else***");

/*Email Verification - Take input from user
1: Length of email > 11
2: After . only 2 or 3 characters are allowed
3: Minimum 3 characters between @ and .
*/

const email = prompt("Enter the email address:");
let emailLen = email.length;
let dotIndex = email.lastIndexOf('.');
let atIndex = email.lastIndexOf('@');
let lastIndex = emailLen - 1;
// if(emailLen < 11 ||
//    lastIndex - dotIndex < 2 ||
//    lastIndex - dotIndex > 3 ||
//    dotIndex -atIndex < 3)
//    {
//         console.log("Invalid email !")
//    }
// else{
//         console.log("Valid email !")
// }

// Using && operator - add one more condition : email should have atleast 2 characters before '@'
if(emailLen >= 11 && lastIndex - dotIndex > 2 && lastIndex - dotIndex < 3 && dotIndex - atIndex > 3 && atIndex >= 3)
{
        console.log("Valid email !");
}
else{
        console.log("Invalid email !")
}



/***********
SWITCH CASE
***********/
console.log("***Switch Case***");

const fruit = prompt("Enter the fruit name :")
switch(fruit){
        case "Apple":
                console.log("Hey, it's Apple!");
                break;
        case "Kiwi":
                console.log("Wow, it's Kiwi !");
        default:
                console.log("Oh NO, it's neither apple nor kiwi !");
                break;
}
console.log("Outside Switch!")



/***************
Ternary Operator
***************/
console.log("***Ternary Operator***");

//Condition ? (True) Expression : (False) Expression
let num6 = 5;
num6 % 2 == 0 ? console.log("Even") : console.log("Odd");
















