//Example-1
const btn = document.createElement("button");
btn.textContent = "Click Here";
btn.className = "btn1";

document.body.appendChild(btn);

btn.addEventListener("click", () => document.querySelector("h2").remove());

//Example-2
const p = document.querySelector("p");
p.addEventListener("mouseover", function () {
  p.style.backgroundColor = "yellow";
});
p.addEventListener("mouseout", function () {
  p.style.backgroundColor = "green";
});

//Example-3
p.addEventListener("mousedown", function () {
  //mousedown - holding click
  p.style.color = "red";
});
p.addEventListener("mouseup", function () {
  //mouseup - releasing click
  p.style.color = "green";
});

//Example-4
document.body.addEventListener("keydown", () => console.log("Key Pressed!")); //press any key and check console

//Example-5
document.body.addEventListener("keydown", (event) => {
  console.log("Key Pressed!");
  console.log(event.type); //type of event i.e keydown
  console.log(event.key); // which type of key is pressed
  console.log(event.keyCode); //ASCII value of key pressed
});
