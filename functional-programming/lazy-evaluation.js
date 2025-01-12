// expression is not evaluated until its value is needed
// optimizes and manages resource-intensive operations
// contrasting to eager evaluation (expressions evaluated as soon as bound to a variable)

// Lazy Evaluation Techniques
// 1. Generators - Functions that can be paused and resumed
function* lazySequence() {
    let i = 0;
    while (true) {
      yield i++;
    }
}
 
const sequence = lazySequence();

console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2

// 2. Closures - encapsulates state and delays computation
function lazyProduct(a, b) {
    return function() {
      return a * b;
    };
}
  
const lazyResult = lazyProduct(2, 3);
  
// Multiplication is only performed when the function is called
console.log(lazyResult()); // 6

// 3. Promises - deferring computation till value is requested
function lazyPromise(fn) {
    return new Promise(resolve => {
        setTimeout(() => resolve(fn()), 1000)
    })
}
const lazyValue = lazyPromise(()=> 'Welcome 2025!');
lazyValue.then((result) => console.log(result)); // Welcome 2025! ; executed after 1 second

// Lazy.js - uses lazy evaluation to perform operations like filter, map
// no iteration takes place until you call each, and no intermediate arrays are created
// https://danieltao.com/lazy.js/
import Lazy from 'lazy.js';
Lazy.generate(Math.random)
  .map(function(e) { return Math.floor(e * 1000) + 1; })
  .uniq()
  .take(300)
  .each(function(e) { console.log(e); });

var fibonacci = Lazy.generate(function() {
var x = 1,
    y = 1;
return function() {
    var prev = x;
    x = y;
    y += prev;
    return prev;
};
}());
console.log(fibonacci.take(10).toArray()); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// REFERENCES: https://scribbler.live/2024/07/03/Lazy-Evaluation-in-JavaScript.html