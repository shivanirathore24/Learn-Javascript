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
  // console.log(typeof req.responseText);  //string JSON
  //console.log(JSON.parse(this.responseText));   //JSON.parse returns JS Object

  const data = JSON.parse(this.responseText);
  console.log(data);
  const card = `<div class="user-card">
  <img src="https://robohash.org/hicveldicta.png" alt="Profile Image" />
  <h3>Shivani</h3>
  <h3>Rathore</h3>
  <p class="email">shiv.vani@gmail.com</p>
  <button class="btn">View Profile</button>
  </div>`;

  divEle.innerHTML = card;
});
