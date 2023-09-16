/*
USER AUTHENTICATION
You are required to build a user authentication system for a web application Using the IIFE.

Requirements:
Create an empty array of objects  with name users  to store registered users.
The IIFE should return two functions.

registerUser: It should take two parameters "username" and "password" and add it to the users array.

The array should be of the form:
 [{username: "user1 ", password: "pwd1 "},
 {username: " user2", password: "pwd2 "}, 
  ....]

Call the checkCredentials  function  to determine if the user is already present in the users array. 

If the user is already registered then return `The user is already registered` otherwise 
push the user object to the Users array and return `The user have been added to the registeredUser array`. 

checkCredentials: It should take two arguments, "username" and "password", and check whether the 
user with the given credentials is present in the user's array or not. It should return false 
if the user is not present otherwise true.

Input:
userAuth.registerUser('testuser', 'password123');
userAuth.registerUser('testuser','password123');

Output:
The user have been added to the registeredUser array
The user is already registered
*/

function main() {
  let userAuth = (function () {
    let registeredUsers = [];

    function registerUser(username, password) {
      if (checkCredentials(username, password)) {
        return `The user is already registered`;
      } else {
        registeredUsers.push({ username: username, password: password });
        return `The user have been added to the registeredUser array`;
      }
    }

    function checkCredentials(username, password) {
      for (let i = 0; i < registeredUsers.length; i++) {
        if (
          registeredUsers[i].username === username &&
          registeredUsers[i].password === password
        ) {
          return true;
        }
      }
      return false;
    }

    return {
      registerUser: registerUser,
    };
  })();

  console.log(userAuth.registerUser("user1", "password123"));
  //Output: The user have been added to the registeredUser array
  console.log(userAuth.registerUser("user1", "password123"));
  //Output : The user is already registered
  return userAuth;
}
main();
