// Symbols - Unique, immutable primitive values, can used as property keys for objects

// Creating symbols
const symbol = Symbol();

// Symbols always return a unique value even if the description is the same
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// Use case of Symbols
// 1. Hidden properties of objects
// Object keys can only be strings or Symbols
// Object key as string
const user1 = {
    user: 'Praneetha'
};
user1['pwd'] = 'xyz';

// Another user code can overwrite and tamper the pwd
user1['pwd'] = 'abc';

// Object key as Symbol
const user2 = {
    user: 'Praneetha'
};
let pwd1 = Symbol('pwd');
user2[pwd1] = 'abc';

// Another user code cannot overwrite the pwd
let pwd2 = Symbol('pwd');
user2[pwd2] = 'xyz';

// Symbol in object literals
let pwd = Symbol('pwd');
let user = {
    name: 'Praneetha',
    [pwd]: '123'
};

// Symbols cannot be used with the new operator
// const sym = new Symbol('123'); // TypeError: Symbol is not a constructor

// Symbols are not enumerable in for...in loops
for (let key in user) {
    console.log('key: ', key); // name
}

// Symbols are ignored in JSON.stringify
console.log(JSON.stringify(user)); // {"name":"Praneetha"}

// Symbols are not returned in Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(user)); // ['name']

// To get all symbol properties in an object
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(pwd)]

// Global Symbols - create a symbol whose value is unique throughout the lifetime of the program
// Symbol.for("token") takes a symbol and returns its value from the registry; if not there, it creates one and returns it
console.log(Symbol.keyFor(Symbol.for("token")) === "token"); // true

// Well-known symbols
// 1. hasInstance
class MyArray {
    static [Symbol.hasInstance](instance) {
        // Custom logic
        return Array.isArray(instance) && instance.length > 0;
    }
}

const arr1 = [1, 2, 3];
const arr2 = [];
const notArr = { a: 1 };

console.log(arr1 instanceof MyArray); // true
console.log(arr2 instanceof MyArray); // false
console.log(notArr instanceof MyArray); // false

// 2. Symbol.iterator
let obj = { 'a': 1, 'b': 2 };
// Below code throws TypeError: Object is not iterable
for (let num of obj) {
    console.log(num);
}

// Whenever an object needs to be iterated,
// its [Symbol.iterator]() method is called with no arguments,
// and the returned iterator is used to obtain the values to be iterated.
let range = {
    from: 2,
    to: 8,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (let num of range) {
    console.log(num); // 2 3 4 5 6 7 8
}
