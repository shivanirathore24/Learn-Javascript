/*
The standard DOM Events describes 3 phases of event propagation:
Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.
*/

/* Bubbling - When an event happens on an element, it first runs the handlers on it, 
then on its parent, then all the way up on other ancestors. */
document.querySelector("h3").addEventListener("click", () => {
  console.log("Heading 3 Clicked");
});

document
  .getElementById("innerDiv")
  .addEventListener("click", () => console.log("Inner Div Clicked"));

document
  .getElementsByTagName("div")[0]
  .addEventListener("click", () => console.log("Outer div Clicked"));

document.body.addEventListener("click", () => console.log("Body Clicked"));

/*
For bubbling:
i/p:Click h3
o/p:Heading 3 Clicked
    Inner Div Clicked
    Outer div Clicked
    Body Clicked

i/p:Click Outer div
o/p:Outer div Clicked
    Body Clicked
*/

/* Capturing - an event propagates from the outermost element to the target element. It is the opposite 
of event bubbling, where events propagate outwards from the target to the outer elements. Events trickle 
down in event capturing. Capturing happens before bubbling */
document.querySelector("h3").addEventListener("click", () => {
  console.log("Heading 3 Clicked");
});

document
  .getElementById("innerDiv")
  .addEventListener("click", () => console.log("Inner Div Clicked"), true);

document
  .getElementsByTagName("div")[0]
  .addEventListener("click", () => console.log("Outer div Clicked"), true);

document.body.addEventListener(
  "click",
  () => console.log("Body Clicked"),
  true
);

/* 
For Capturing:
i/p:Click h3
o/p:Body Clicked
    Outer div Clicked
    Inner Div Clicked
    Heading 3 Clicked

i/p:Click Outer div
o/p:Body Clicked
    Outer div Clicked
*/

//stopPropagation
document.querySelector("h3").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Heading 3 Clicked");
});

document.getElementById("innerDiv").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Inner Div Clicked");
});

document
  .getElementsByTagName("div")[0]
  .addEventListener("click", () => console.log("Outer div Clicked"));

document.body.addEventListener("click", () => console.log("Body Clicked"));

/*
For Stop Propagation:
i/p:Click h3
o/p:Heading 3 Clicked

i/p: Click Inner div ( outside h3)
o/p:Inner Div Clicked
*/

//stopPropagation won't while keeping useCapture : true
document.querySelector("h3").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Heading 3 Clicked");
});

document
  .getElementById("innerDiv")
  .addEventListener("click", () => console.log("Inner Div Clicked"), true);

document
  .getElementsByTagName("div")[0]
  .addEventListener("click", () => console.log("Outer div Clicked"), true);
document.body.addEventListener(
  "click",
  () => console.log("Body Clicked"),
  true
);

/*
The event propagation is not being stopped because you are using the addEventListener method with the 
useCapture parameter set to true for all your event listeners.
The useCapture parameter determines the order in which event listeners are called during the capturing 
and bubbling phases of event propagation. When useCapture is set to true, the event listener is 
called during the capturing phase, and when it's set to false (or omitted), the event listener is called 
during the bubbling phase.

In your code, you have set useCapture to true for all your event listeners. This means that during the 
capturing phase, when an event occurs on an element inside another element, the outermost element's event 
listener will be called first. In other words, when you click on "Inner Div", "Outer div", or "Body", 
their respective event listeners will be triggered before reaching the "h3" element.

Since you have used stopPropagation() only in the "h3" element's event listener, it will prevent further 
propagation of events from that point onwards in both capturing and bubbling phases. However, since all 
other elements' event listeners are being triggered during the capturing phase before 
reaching "h3", calling stopPropagation() in "h3" will not affect them.

To stop propagating events from inner elements to outer elements, you can either remove or change the 
value of useCapture parameter for those elements' event listeners. If you want to stop propagating events 
from inner elements to outer elements completely, you can remove or change it to false.
*/

/*
During event propagation, the first phase that occurs is the capture phase. In this phase, the event 
starts from the highest-level ancestor element and travels down the DOM tree to the target element. 
*/
