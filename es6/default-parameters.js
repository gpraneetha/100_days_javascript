// allows named parameters to be initialized if no value or undefined is passed
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}
console.log(multiply(5)); // 5
// the above checks can be avoided with default parameters
function multiply(a, b=1) {
    return a * b;
}
console.log(multiply(5));

function test(num = 1) {
    console.log(num);
}
test(); // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)
// with other falsy values:
test(""); // 'string'; num is set to ''
test(null); // 'object'; (num is set to null)

// default parameters evaluated at runtime
function fruits(value, fruits = []) {
    fruits.push(value);
    return fruits;
}
fruits('Avacado'); // ['Avacado']
fruits('Dragon Fruit'); // ['Dragon Fruit']

// parameters defined to left are available
function greetUser(user, greeting, msg = `${greeting} ${user}`) {
    console.log(msg);
}
greetUser('Tirzah', 'GM');

// Destructuring default parameters
function totalPrice([x = 30, y = 40] = []) {
    console.log(x + y);
}
  
totalPrice(); // 70
totalPrice([]); // 70
totalPrice([20]); // 60
totalPrice([20, 30]); // 50

// objects:
function totalPriceObj({ price = 3 } = {}) {
    console.log(price);
}

totalPriceObj(); // 3
totalPriceObj({}); // 3
totalPriceObj({ price: 2 }); // 2
  
  
  
  