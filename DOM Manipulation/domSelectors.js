/* DOM Selector - access a particular node.
1: querySelector & querySelectorAll 
The querySelector returns a DOM node matching the parameter passed in querySelector.
If there is no match of the attribute defined in the querySelector then null is returned.
*/
console.log(document.querySelector("h1")); //select h1 first tag o/p: <h1>DOCUMENT OBJECT MODEL</h1>
console.log(document.querySelectorAll("h1")); // select all h1 o/p: NodeList(2) [h1, h1.shiv]
const heading = document.querySelector(".shiv"); //select by class name
const para = document.querySelector("#para"); ///select by id

console.log(heading); // h1.shiv with content
console.log(para); // p#para with content

console.log(document.getElementById("para")); // exclusively selects only id, o/p: <p id="para">.... </p>
console.log(document.getElementsByClassName("shiv")); // exclusively selects only class, o/p: HTMLCollection [h1.shiv]
console.log(document.getElementsByTagName("h1")); //exclusively selects only hi tag, o/p: HTMLCollection(2) [h1, h1.shiv]

heading.style.color = "red";
para.style.color = "grey";
