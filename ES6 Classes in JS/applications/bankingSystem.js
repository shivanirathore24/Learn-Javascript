/*
BANKING SYSTEM
Suppose you have been hired to develop a simple banking application that should include basic user account functionality. 
The application should allow users to create an account, deposit and withdraw funds, and check their current balance.

Objective:
Create a class called Account with the following private properties:
   - accountNumber (string)
   - balance (number)
Create a getter and a setter for the balance property, which should only allow positive values. If a negative value is 
passed to the setter, it should return the message "Please enter a positive value for the balance".
Create a method called deposit() that accepts a number as an argument. The method should add the argument value to the 
balance property.
Create a method called withdraw() that accepts a number as an argument. The method should subtract the argument value 
from the balance property. If the argument value is greater than the current balance, the method should return the 
message "Insufficient balance".

Input:
const myAccount = new Account("1234567890");
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getbalance); 

Output:
 300
*/

function main() {
  class Account {
    #accountNumber;
    #balance;
    constructor(accountNumber) {
      this.#accountNumber = accountNumber;
      this.#balance = 0;
    }

    get getbalance() {
      return this.#balance;
    }

    set setbalance(value) {
      if (value < 0) {
        return "Please enter a positive value for the balance";
      }
      this.#balance = value;
    }

    deposit(amount) {
      this.#balance += amount;
    }

    withdraw(amount) {
      if (amount > this.#balance) {
        return "Insufficient balance";
      }
      this.#balance -= amount;
    }
  }

  // creating an account
  const myAccount = new Account("1234567890");

  // depositing funds
  myAccount.deposit(500);

  // withdrawing funds
  myAccount.withdraw(200);

  // getting the current balance
  console.log(myAccount.getbalance); // output: 300
  return Account;
}

main();
