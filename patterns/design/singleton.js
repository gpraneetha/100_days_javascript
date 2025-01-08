// initialized once and accessed globally
// useful for managing global state in an application
let instance;
let employeeCount = 0;
class Company {
    constructor() {
        if (instance) {
            console.error('You can create only one instance!'); return;
        }
        instance = this;
    }
    getCount() {
        return employeeCount;
    }
    addEmployee() {
        employeeCount++;
    }
    removeEmployee() {
        employeeCount--;
    }
}
const company = new Company();
const company2 = new Company(); // You can create only one instance!
// Export instance so other files can consume the class properties
// Freeze the instance so that consuming code cannot modify object
// export default Object.freeze(company);

import addEmployee1 from './employee1.js';
import addEmployee2 from './employee2.js';

// both files import the same instance; hence same value shared among instances
// addEmployee1(); // Employee Counter: 1
// addEmployee2(); // Employee Counter: 2

// Benefits: Save lot of memory
// Disadvantages: Global scope pollution, tight coupling, difficult to test
// Note: this DP is considered an anti-pattern in Javascript// Singleton using objects

// Creating Singleton using objects
let employeeCountObj = 0;
const companyObject = {
    getCount: () => employeeCountObj,
    addEmployee: () => ++employeeCountObj,
    removeEmployee: () => --employeeCountObj
};
export default Object.freeze(companyObject);
addEmployee1(); // Employee Counter: 1
addEmployee2(); // Employee Counter: 2
