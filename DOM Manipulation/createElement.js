const btn = document.createElement("button");
btn.textContent = "Click Here";
btn.className = "btn1";

const division = document.querySelector("div");
division.appendChild(btn); //btn will be created inside div tag
