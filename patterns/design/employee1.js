import company from './singleton.js';

export default function addEmployee1() {
    company.addEmployee();
    console.log('Employee Counter:', 
        company.getCount());
}