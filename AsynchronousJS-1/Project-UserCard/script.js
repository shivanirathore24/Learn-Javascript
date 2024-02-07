const divEle = document.querySelector(".card-container");

function getDetails(id) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://dummyjson.com/users/${id}`);
  request.send();

  request.addEventListener("load", function () {
    //console.log(this.responseText);    //string JSON
    //console.log(JSON.parse(this.responseText));  //JSON.parse returns JS Object
    const data = JSON.parse(this.responseText);
    console.log(data);

    const card = `<div class="user-card">
    <img src=${data.image} alt="Profile Image" />
        <h3>${data.firstName}</h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
        </div>`;

    divEle.insertAdjacentHTML("beforeend", card);
  });
}

getDetails(2);
getDetails(4);
getDetails(1);
