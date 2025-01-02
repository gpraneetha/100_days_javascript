// Design patterns: General solution to common design problems
// Creational Patterns: Factory
// handles object creation in a centralised way - keeps code clean & concise
function Developer(name) {
    this.name = name;
    this.role = 'Developer';
}
function Tester(name) {
    this.name = name;
    this.role = 'Tester';
}
// object creation centralized in this factory
function EmployeeFactory() {
    this.create = (name, role) => {
        switch(role) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

function printEmployees(emp) {
    console.log(`Employee Name: ${emp.name} and Role: ${emp.role}`);
}

const employee = new EmployeeFactory();
const employees = [];
employees.push(employee.create('Praneetha', 1));
employees.push(employee.create('John', 1));
employees.push(employee.create('Jamie', 2));

for (let emp of employees) {
    printEmployees(emp);
}
// Employee Name: Praneetha and Role: Developer
// Employee Name: John and Role: Developer
// Employee Name: Jamie and Role: Tester



