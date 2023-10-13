/*
The setAttribute() method sets a new value to an attribute.
If the attribute does not exist, it is created first.
*/

//Modify Attribute
const h1Modify1 = document.getElementById("heading");
h1Modify1.setAttribute("style", "color:blue");

const pModify = document.getElementById("para");
pModify.setAttribute("id", "paragraph");

//Add Attribute
const divAdd = document.querySelector("div");
divAdd.setAttribute("class", "myDiv");

const divRemove = document.querySelector("div");
divRemove.setAttribute("class", "null");

const h3Remove = document.querySelector("a");
h3Remove.setAttribute("href", "null");
