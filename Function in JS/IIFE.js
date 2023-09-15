/* IIFE - Immediately Invoked Function Expression */
/*
1- Since IIFE is an expression, not a statement, it will not be hoisted.
Hoistings only applies to variable and function declarations, not initializations or assignments.
2- Through IIFE, we can create a private scope for our code, preventing variables and functions
from polluting the global namespace. This encapsulation helps maintain code integrity, improves modularity,
and reduces the chances of naming conflicts with other scripts or libraries.
*/

(function () {
  console.log("IIFE");
})();

(function (a, b) {
  console.log(a ** b);
})(4, 2);

const user = (function () {
  const userData = {
    userName: "Shiv",
    userAge: 21,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }

  return { getName, updateAge };
})();

console.log(user); //{getName: ƒ, updateAge: ƒ}
user.getName(); //Shiv
user.updateAge(3); //24
console.log(user.userData); //undefined
