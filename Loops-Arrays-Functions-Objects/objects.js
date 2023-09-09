/* Objects in JS : you can create object without creating class */

const student = {
    name: "Alexa",
    age: 10,
    hobby: "Sports",
    100: "Hundred",
    show: function(){   //Anonymous function : no need to mention name becoz show will act as function name. 
        console.log("This is the student details section !")
    }
};

console.log(student);       //{100: 'Hundred', name: 'Alexa', age: 10, hobby: 'Sports', show: ƒ}
console.log(student.name);      //Alexa
console.log(student['name']);       //Alexa
console.log(student[name]);     //undefined
console.log(student[100]);      //Hundred
student.show();         //This is the student details section !

