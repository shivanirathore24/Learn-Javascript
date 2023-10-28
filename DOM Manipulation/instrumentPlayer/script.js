let buttonInnerHTML;
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

//detecting keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("https://files.codingninjas.in/tom-1-28537.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("https://files.codingninjas.in/tom-2-28541.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("https://files.codingninjas.in/tom-3-28542.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("https://files.codingninjas.in/tom-4-28543.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("https://files.codingninjas.in/snare-28545.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("https://files.codingninjas.in/crash-28546.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("https://files.codingninjas.in/kick-bass-28547.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
