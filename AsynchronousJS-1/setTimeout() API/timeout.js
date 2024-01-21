//case-1
console.log("Message before alert");
alert("Blocking JS"); //here, alert API is synchronous in nature.
console.log("Message after alert");

//case-2
const buttonElement = document.querySelector(".button");
const textElement = document.querySelector("#text");

buttonElement.addEventListener("click", () => {
  textElement.textContent = "Button is pressed";
  setTimeout(() => {
    textElement.textContent = "";
  }, 2000);
});

//case-3
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); //output: 5, 5, 5, 5, 5
  }, 2000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); //output: 0, 1, 2, 3, 4
  }, 2000);
}
/* 
1: Feature of JS --> synchronous and single-thread.
2: JS can be aysnchronous with the help of API which works asynchronously --> that makes codes non-blocking.
3: Concept used : Event Loop; there is API like setTimeout, setInterval ,fetch which are aysnchronous in nature 
present in window object.
4: Benefit of Aysnchronous function in JS : enables parallel execution of multiple tasks, improving overall
performance. These funcitons allows tasks to run in the background without blocking other operations, ensuring 
that different parts of the code can execute concurrently.
5: SetTimeout, FileReader, Geolocation are asynchronous in nature and can be used to delay the function, read file 
and get location respectively while the DOM API is asynchronous in nature.
6: If no delay is specified in SetTimeout then default value is ) means callback function is executed immediately.
*/
