/*
SALARY MODIFIER
Suppose you have a list of employees in a company, and each employee is represented as an object with the following properties: 
"id" - a unique identifier for the employee
"name" - the employee's name
"department" - the department the employee works in
"salary" - the employee's current salary

Objectives:
You want to make a modification to the list of employees to reflect a recent company-wide salary increase. 
You have been provided with the following information:
Salaries for employees in the "sales" department should be increased by 10%.
Salaries for employees in the "engineering" department should be increased by 15%.
Salaries for employees in all other departments should be increased by 5%.
You need to write a function "increaseSalaries" that takes an array of employee objects and 
returns a new array of employee objects where each employee's salary has been updated based 
on their department. The original array of employees should be left unchanged.

Note:
The salary should be converted to one decimal place using toFixed().
Hint:
Use the map function to iterate over every object in the array
*/

const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 },
];

function increaseSalaries(employees) {
  const updatedEmployees = employees.map((employee) => {
    let salary = employee.salary;
    switch (employee.department) {
      case "sales":
        salary = (salary * 1.1).toFixed(1);
        break;
      case "engineering":
        salary = (salary * 1.15).toFixed(1);
        break;
      default:
        salary = (salary * 1.05).toFixed(1);
        break;
    }
    return { ...employee, salary };
  });
  return updatedEmployees;
}

console.log(increaseSalaries(employees));
/*
0: {id: 1, name: 'Alice', department: 'sales', salary: '44000.0'}
1: {id: 2, name: 'Bob', department: 'engineering', salary: '57500.0'}
2: {id: 3, name: 'Charlie', department: 'marketing', salary: '47250.0'}
3: {id: 4, name: 'David', department: 'sales', salary: '38500.0'}
4: {id: 5, name: 'Emily', department: 'engineering', salary: '63250.0'}
length: 5
*/
