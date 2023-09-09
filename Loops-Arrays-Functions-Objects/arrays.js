/************
ARRAYS IN JS - Arrays in the JS are so liberal it can actually hold any data type ans even function in it.
Data type: object, primitive, function ...
************/

//way-1
const students = ["Alexa", "Google", "Amazon"];
console.log(students);      //['Alexa', 'Google', 'Amazon']
console.log(students[1]);       //Google

//way-2
const cars = new Array('BMW', 'Thar');
console.log(cars);      //['BMW', 'Thar']    

//Arrays in JS can store heterogenous data
const arr = ["Apple", "Shiv", 24, true];
console.log(arr);       //['Apple', 'Shiv', 24, true]



/*****************
METHODS OF ARRAYS
*****************/

const cities = ['Mumbai', 'Delhi', 'Calcutta', 'Jaipur', 'Chennai'];
console.log(cities.length);     //5

// const value can't be changed for primitive data type.
// Array is object type (not primitive data type)
cities[2] = 'Kolkata';
console.log(cities);        //['Mumbai', 'Delhi', 'Kolkata', 'Jaipur', 'Chennai'


/* Adding an element - push() , unshift() */

//push() --adds at end
const teams = ['CSK', 'RCB', 'MI', 'LSG'];
//teams.push('GT');
console.log(teams);     //['CSK', 'RCB', 'MI', 'LSG', 'GT']

const pushArray = teams.push('GT');     //returns length
console.log(pushArray);     //5

/* Array passed as arguments to push will be treated as a single element and added to the fruits array.
the return value of fruits.push will be the new length of the array, which in this case is 3.*/
var fruits = ['banana', 'orange'];
var newLength = fruits.push(["apple", "mango"]);
console.log(newLength);     //3


//unshift() --adds at starting
teams.unshift('KKR');
console.log(teams);     //['KKR', 'CSK', 'RCB', 'MI', 'LSG', 'GT']
console.log(teams.length);      //6


/* Removing an element - pop(), shift() */

//pop() --removes from end
teams.pop();
console.log(teams);     //['KKR', 'CSK', 'RCB', 'MI', 'LSG']

//shift() --removes from starting
teams.shift();
console.log(teams);     //['CSK', 'RCB', 'MI', 'LSG']


/* Check the element is present or not - indexOf(), includes() */

//indexOf()
const RCBIndex = teams.indexOf('RCB');
console.log(RCBIndex);      //1
const gtIndex = teams.indexOf('GT');
console.log(gtIndex);      //-1

//includes()
const gtIncludes = teams.includes('GT');
console.log(gtIncludes);    //false


/* Slice() & Splice() 
Slice returns a piece of the array but it doesn't affect the original array. 
Splice changes the original array by removing, replacing, or adding values and returns the affected values. 
*/

//slice()
console.log(teams);     //['CSK', 'RCB', 'MI', 'LSG']
console.log(teams.slice(2));        //['MI', 'LSG']
console.log(teams);     //['CSK', 'RCB', 'MI', 'LSG']
console.log(teams.slice(-1));       //['LSG']

//splice()
teams.splice(2, 0, "GT");       // 2- index , 0- delete count, "GT"- insert
console.log(teams);     //['CSK', 'RCB', 'GT', 'MI', 'LSG']

teams.splice(2, 1, "RR", "DC");
console.log(teams);     //['CSK', 'RCB', 'RR', 'DC', 'MI', 'LSG']

/* If you don't specify the deleteCount in the spice method, it will automatically take the next  parameter
 as deleteCount, since here the next parameter is a string, so will get discarded, and 'y' will be inserted at index 2. */
var arr1 = ['a', 'b', 'c', 'd'];
arr1.splice(2, 'x', 'y');     
console.log(arr1);      //['a', 'b', 'y', 'c', 'd']

//concat()
const team1 = ["South Africa", "England"];
const team2 = ["India", "Australia", "New Zealand"];
const mergedTeams = team1.concat(team2);
console.log(mergedTeams);           // ['South Africa', 'England', 'India', 'Australia', 'New Zealand']


/* Loops in Arrays */
const Students = ["Shiv", "Neer", "Abhi", "Mahi"];
for(let i = 0; i < Students.length; i++)    // i is number
{
    console.log(`Roll no ${i+1}: ${Students[i]}`);
}


/* for ..in & for ..of loops */
for(let i in Students)      //i acts as string
{
    console.log(`Roll no ${Number(i)+1}: ${Students[i]}`);
}

for(let student of Students)    //iterator: not index no, but element from array itself.
{
    console.log(student);
}


/* break and continue */
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
for( let i of input)
{
    if(i % 2 !== 0){
        continue;
    }
    evenNumbers.push(i);
    
    if(evenNumbers.length == 5){
        break;
    }
    console.log(evenNumbers);
}
console.log(evenNumbers);       //[2, 4, 6, 8, 10]



















