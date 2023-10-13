/*
remove Element - remove()
The remove method is used to delete the element from the DOM whereas the removeChild method of the 
parent element is used to remove the child element. For example, parent.removeChild(child).  
*/
document.querySelector("h2").remove();
const parent = document.querySelector("div");
const h3Element = parent.querySelector("h3");
parent.removeChild(h3Element);

//eventListener
const p = document.querySelector("p");
// p.addEventListener("click", clickPara());
/*
Don't call function i.e clickPara() becoz before clicking, para function will be called.
Solution: 
1- write only function name i.e clickPara or 
2- call clickPara() inside function
These two approach will wait for click event, then only function will be executed.
*/

//way-1
// p.addEventListener("click", clickPara);

//way-2
p.addEventListener("click", function () {
  clickPara();
});

function clickPara() {
  console.log("Para Clicked!");
}

//click button2 --> linked will be removed
const btn2 = document.getElementById("button2");
btn2.addEventListener("click", hideLink);

function hideLink() {
  console.log("Button2 clicked");
  document.querySelector("a").remove();
}
