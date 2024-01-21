const textElement = document.querySelector("#text");
let seconds = 0;
textElement.textContent = `${seconds}`;

const timer = setInterval(() => {
  seconds++;
  textElement.textContent = `${seconds}`;

  if (seconds >= 5) {
    clearInterval(timer); //to stop event by clearing interval after 5 seconds
  }
}, 1000);

/*
1. The setInterval() method calls a function at specified intervals (in milliseconds).
The setInterval() method continues calling the function/event until clearInterval() is called, or the window is closed.
1 second = 1000 milliseconds.
2. If no delay is specified in the setInterval, then the callback function is executed repeatedly and immediately.
3. The setInterval function in JS returns a unique number, non-zero value as intervalID of the timer (timerID) created by 
the call to setInterval() . This intervalID value can be passed to clearInterval() to cancel the interval.
*/
