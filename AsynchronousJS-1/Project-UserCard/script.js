const divEle = document.querySelector(".card-container");

/* intiate httprequest, req object will interact with server & retrieve data from url 
  without having to do full page refresh
  XMLHttpRequest - not much in use in modern time, legacy API
  */
const req = new XMLHttpRequest();

req.open("GET", `https://dummyjson.com/users/1`);
req.send(); //send request to server

//display something on screen on the screen, when request has been completed/data has been loaded
req.addEventListener("load", function () {
  console.log(req.responseText);
});
