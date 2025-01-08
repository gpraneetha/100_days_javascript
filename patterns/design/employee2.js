import company from './singleton.js';

export default function addEmployee2() {
    company.addEmployee();
    console.log('Employee Counter:', 
        company.getCount());
}