// module is a file containing javascript code
// import - inorder to use exported values from module, import them explicitly
// as is used for add to avoid name collision here
// squareNumbers is the default export, we can give any name, import to be given without {}
import squareNumbers, { add as addNumbers, multiply, subtract } from "./calculator.js";

console.log(addNumbers(10, 30)); // 40
console.log(subtract(60, 30)); // 30
console.log(multiply(90, 3)); // 270
console.log(squareNumbers(11)); // 121

function add(...args) {
    return args.reduce((acc, cur)=> cur + ' ' + acc);
}

console.log(add('Praneetha', 'Tirzah')); // Tirzah Praneetha

// import all exports from calculator module
// may end up unneccesarily importing values
import * as math from './calculator.js';
console.log(math.add(10,30)); // 40
