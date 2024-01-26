//without callback
function greet() {
  setTimeout(() => {
    console.log("Hello");
  }, 1000);
}

function message() {
  console.log("Welcome to the session !");
}

greet();
message();

/* OUTPUT :
Welcome to the session !
Hello    -->after 1 second that will be printed
*/

/* Q. what if we want to call mesaage1() function after greet1() has been called ?
Ans: pass 'message1' as callback to greet1() function */

//with callback
function greet1(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 1000);
}

function message1() {
  console.log("Welcome to the session !");
}

greet1(message1);
/* OUTPUT :
Hello
Welcome to the session !
*/

/* 
Callback is useful ? Examples :
If you are fetching something from the server, it's not neccessary that you can get the data at the moment
you just run the program there might be some internet issue, server-down issue, system issue i.e performing 
slow.
If you are fetching something from the server, it's not neccessary that you will get output, you may have to wait
So, you don't want to show user profile until data has been fetched from the server.
*/
