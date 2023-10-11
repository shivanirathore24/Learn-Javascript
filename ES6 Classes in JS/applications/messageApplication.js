/*
Message Application
Suppose you are working on a project to develop a messaging application.

Objective:
Create a class called Message, which has the following instance variables:
   - sender
   - receiver
   - messageContent
To keep track of the total number of messages sent and received, create a static variable called "totalMessages".
Create a static variable called status to show the status of the User, which should initially be set to false.

The Message has the following static methods-
recordMessage - To keep track of total number of messages sent. It should be able to increment the totalMessage every time 
it is called. This method should be called every time a new message is sent using the Message class.
changeStatus - It should be able to change the static property status to true or false depending on its value and console 
a message representing the status as  " the status has been changed to online/offline" depending on the value of status.

The Class should have the following public methods
sendMessage - It should console using the sender, receiver and messagecontent of the Object in the format :
"The message  has been sent from <sender> to <receiver>"
It should utilize the recordMessage to increment the totalMessage.
displayDetail - It should be able to display sender,Receiver,MessageContent,Status,TotalMessage in form of key Value pair 
as shown in expected output.

Note:
The name and console output should be exactly as mentioned in the Problem Statement. Any change will result in the failure 
of test cases.

Input:
Message.changeStatus();
const myMessage = new Message("John", "Jane", "Hello");
myMessage.sendMessage();
myMessage.displayDetails();

Output:
The status has been changed to online
The message 'Hello' has been sent from 'John' to 
'Jane'
Sender: John
Receiver: Jane
Message: Hello
Status: online
Total Messages: 1
*/

class Message {
  static status = false;
  static totalMessages = 0;

  constructor(sender, receiver, messageContent) {
    this.sender = sender;
    this.receiver = receiver;
    this.messageContent = messageContent;
  }

  static changeStatus() {
    Message.status = !Message.status;
    console.log(
      `The status has been changed to ${Message.status ? "online" : "offline"}`
    );
  }

  static recordMessage() {
    Message.totalMessages += 1;
  }

  sendMessage() {
    console.log(
      `The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`
    );
    Message.recordMessage();
  }

  displayDetails() {
    console.log(`Sender: ${this.sender}`);
    console.log(`Receiver: ${this.receiver}`);
    console.log(`Message: ${this.messageContent}`);
    console.log(`Status: ${Message.status ? "online" : "offline"}`);
    console.log(`Total Messages: ${Message.totalMessages}`);
  }
}

// Create a new instance of the Message class
const myMessage = new Message("John", "Jane", "Hello");

// Change the status to online
Message.changeStatus(); //The status has been changed to online

// Send the message
myMessage.sendMessage(); //The message 'Hello' has been sent from 'John' to 'Jane'

// Display the details of the message
myMessage.displayDetails();
// Render: John
// Receiver: Jane
// Message: Hello
// Status: online
// Total Messages: 1
