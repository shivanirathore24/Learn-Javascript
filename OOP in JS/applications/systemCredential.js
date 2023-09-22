/*
SYSTEM CREDENTIAL
You are working on a web application that involves managing user authentication.
Objective:
Implement the login method on the User prototype.
This method should take two parameters:username and password.
The method should check if the provided username and password match the systemCredentials. If they match, it should log 
"Login successful!" to the console. Otherwise, it should log "Login failed!".
Lastly, modify the login method by using the bind method to create a reusable function named loginFunction that is bound 
to the systemCredentials object.
*/

function User(displayName) {
  this.displayName = displayName;
}

const systemCredentials = {
  username: "system",
  password: "pass123",
};

User.prototype.login = function (enteredUsername, enteredPassword) {
  if (this.username === enteredUsername && this.password === enteredPassword) {
    console.log("Login successful!");
  } else {
    console.log("Login failed!");
  }
};

// Example usage with bind:
const user = new User("Shivani Rathore");
const loginFunction = user.login.bind(systemCredentials);

loginFunction("system", "pass123"); //"Login successful!"
loginFunction("wrongUsername", "wrongPassword"); //"Login failed!"
