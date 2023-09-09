//without rest operator
const aprilBatch = ["Tina", "Madhuri"];
const mayBatch = ["Ritik", "Shalini", "Roshni"];
const juneBatch = ["Saba", "Shivani"];
const julyBatch = [];

function addStudent(batch, student){
    batch.push(student);
    console.log(batch);
}

addStudent(aprilBatch, "Ritu");     //['Tina', 'Madhuri', 'Ritu']
addStudent(mayBatch, "Sunny");      //['Ritik', 'Shalini', 'Roshni', 'Sunny']


/* what if when you want to add multiple students at a single function call --> use rest operator(...) */
/* Rest Operator is used to collect all arguments passed to a function into an array can only be used with the last parameter in a function */
function addStudent(batch, ...students)     //rest operator
{
    for(let i of students){
        batch.push(i);
    }
    console.log(batch);
}

addStudent(aprilBatch,"Sunny", "Ritu", "Sati");     //['Tina', 'Madhuri', 'Ritu', 'Sunny', 'Ritu', 'Sati']



//without spread operator
const newBatch1 = [mayBatch];       //Deep Copy - changes made to new will reflect in oroginal one
console.log(newBatch1);      //['Ritik', 'Shalini', 'Roshni', 'Sunny']
mayBatch.push('Prachi');
console.log(newBatch1);      //['Ritik', 'Shalini', 'Roshni', 'Sunny', 'Prachi']
console.log(mayBatch);      //['Ritik', 'Shalini', 'Roshni', 'Sunny', 'Prachi']

/* Spread operator(...) allows you to expand an array into seperate elements, which can be usefui when creating a new array or 
passing arguments to a function. Also,it canbe used to merge multiple arrays to one */
const newBatch2 = [...mayBatch];        //Shallow Copy - changes made to new one won't affect original one
console.log(mayBatch);      //['Ritik', 'Shalini', 'Roshni', 'Sunny', 'Prachi']
console.log(newBatch2);     //['Ritik', 'Shalini', 'Roshni', 'Sunny', 'Prachi']
newBatch2.push('Shiv');
console.log(newBatch2);       //['Ritik', 'Shalini', 'Roshni', 'Sunny', 'Prachi', 'Shiv']
console.log(mayBatch);      //['Ritik', 'Shalini', 'Roshni', 'Sunny', 'Prachi']

const mergeBatch = [...mayBatch, ...juneBatch];
console.log(mergeBatch);        //'Ritik', 'Shalini', 'Roshni', 'Sunny', 'Prachi', 'Saba', 'Shivani']




