const appId = '5901239a';
const appKey = '6d73ef9e86d9c8f6b3d1095b64e8f354';
const baseUrl = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
const plantUrl = 'https://trefle.io/api/v1/plants?token=u6wIzKcpQTP08hHuXHfrbSHZ6-LyFblISwSIwUh1A-0&page=2';
const https = require('https');

// Function to perform API call using XMLHttpRequest
function getNutritionInfo(query) {
    return new Promise(function (resolve, reject) {
        const data = JSON.stringify({
            "query": query
        });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': appId,
                'x-app-key': appKey,
            }
        };

        const req = https.request(baseUrl, options, (res) => {
            let responseData = '';

            // A chunk of data has been received.
            res.on('data', (chunk) => {
                responseData += chunk;
            });

            // The whole response has been received.
            res.on('end', () => {
                if (res.statusCode === 200) {
                    // callback(null, JSON.parse(responseData));
                    resolve(JSON.parse(responseData));
                } else {
                    // callback(`Error: ${res.statusCode}`, null);
                    reject(`Error: ${res.statusCode}`);
                }
            });
        });

        // Handle request error
        req.on('error', (error) => {
            // callback(`Request error: ${error.message}`, null);
            reject(`Error: ${res.statusCode}`);
        });

        // Send the data
        req.write(data);
        req.end();
    })

}

//function to get plants data
// function getPlantsInfo(query) {
//     return new Promise(function (resolve, reject) {
//         const data = JSON.stringify({
//             "query": query
//         });

//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         };

//         const req = https.request(plantUrl, options, (res) => {
//             let responseData = '';

//             // A chunk of data has been received.
//             res.on('data', (chunk) => {
//                 responseData += chunk;
//             });

//             // The whole response has been received.
//             res.on('end', () => {
//                 if (res.statusCode === 200) {
//                     // callback(null, JSON.parse(responseData));
//                     resolve(JSON.parse(responseData));
//                 } else {
//                     // callback(`Error: ${res.statusCode}`, null);
//                     reject(`Error: ${res.statusCode}`);
//                 }
//             });
//         });

//         // Handle request error
//         req.on('error', (error) => {
//             // callback(`Request error: ${error.message}`, null);
//             reject(`Error: ${res.statusCode}`);
//         });

//         // Send the data
//         req.write(data);
//         req.end();
//     })

// }
// function calculateBMI(weight, height) {

//     const bmi = weight / (height * height);

//     return bmi.toFixed(2);
// }

// function calculateArea(radius) {

//     return calculateArea.pi * radius
// }

// Function.prototype.pi = 3.14
// console.log(calculateArea(4))
// // const displayTotalCalories = (foodItems) => totalCalories(calories);

// // console.log(displayTotalCalories());

// // global
// console.log('global', this);

// // function context - non-strict mode (this substitution)
// function greetNonStrict() {
//     console.log('hello inside non-strict mode function', this) // window object
// }
// greetNonStrict()

// // function context - strict mode
// function greetStrict() {
//     "use strict";
//     console.log('hello inside Strict mode function',this) // undefined
// }
// greetStrict()
// // this inside an object method
// const obj1 = {
//     a: 10,
//     greet: function() {
//         console.log('hello inside method', this) // { a: 10, greet: [Function: greet] }
//     }
// }
// // method called using object
// obj1.greet()

// // this inside arrow function
// const obj2 = {
//     a: 10,
//     greet: () => {
//         console.log('hello inside arrow method', this) // window object this refers to enclosing lexical context; arrow function dont provide their own binding
//     }
// }
// obj2.greet()

// // Call, apply and bind
// let person1 = {
//     name: 'A',
//     logName: function(height,weight) {
//         console.log(`BMI for ${this.name} for height ${height} and weight ${weight}: `,calculateBMI(height,weight))
//     }
// }

// let person2 = {
//     name: 'B'
// }
// let person3 = {
//     name: 'C'
// }
// let person4 = {
//     name: 'D'
// }

// person1.logName.call(person2,153,50)
// person1.logName.apply(person3,[148,40])

// const logBmi = person1.logName.bind(person4,162,60)
// logBmi()

// // Prototypal Inheritance

// // inheriting properties
// // const defaultTheme = {
// //     theme: 'teal',
// //     language: 'EN',
// // }
// // const user1Theme = {
// //     theme: 'blue',
// //     language: 'FR',
// //     __proto__: defaultTheme
// // }
// // const user2Theme = {
// //     theme: 'blue',
// //     __proto__: defaultTheme
// // }
// // console.log(user1Theme.theme) //blue
// // console.log(user2Theme.language) //EN

// // inheriting methods
// const parent = {
//     value: 2,
//     increment() {
//         return this.value+1
//     }
// }

// const child = {
//     __proto__: parent
// }

// console.log(child.increment())

// // Constructors
// function Person(marks) {
//     this.marks = marks;
//   }
// Person.prototype.getMarks = function () {
//     return this.marks;
// };
// const person = new Person(80);
// console.log(person.getMarks()) //80

// // Mutate Box.prototype after an instance has already been created - added grace marks :)
// Person.prototype.getMarks = function () {
//     return this.marks + 10;
// };
// console.log(person.getMarks()); // 90


// // Creating nd mutating prototype chains
// // using setPrototypeOf
// const student = { name: 'Ana' };
// const subjects = { subjects: ['Maths', 'Science'] };
// Object.setPrototypeOf(student, subjects);
// // student ---> subjects ---> Object.prototype ---> null

// // using Object.create
// const a = { a: 1 };
// // a ---> Object.prototype ---> null
// const b = Object.create(a);
// // b ---> a ---> Object.prototype ---> null
// console.log(b.a);

// // using Classes
// class Student {
//     constructor(name, subjects) {
//       this.name = name;
//       this.subjects = subjects;
//     }
//   }
  
//   class StudentActivities extends Student {
//     constructor(name, subjects, activities) {
//       super(name, subjects);
//       this.activities = activities
//     }
//   }
  
//   const studentObj = new StudentActivities(5, 10, ['Reading', 'Basketball']);
//   // studentObj ---> StudentActivities.prototype ---> Student.prototype ---> Object.prototype ---> null

// console.log('************************************Destructuring Assignment***************************')
// // Destructuring Assignment

// // let x, y, rest;
// // [x,y,...rest] = [10,20,30,40];

// // console.log(x); //10
// // console.log(y); //20
// // console.log(rest); [30,40]

// const z = {z1:1,z2:2}
// const { z1, z2 } = z; // while destructuring objects keynames must be the same
// console.log(z1,z2); //1 2

// // bind pattern
// const obj = { a1: 1, b: { c: 2 } };
// const {
//   a1,
//   b: { c: d },
// } = obj;
// console.log(a1,d)
// // Two variables are bound: `a` and `d`
// // writing {a} is same as {a:a}

// // use let if you want to reassign
// let {
//     b: { c: d1 },
//   } = obj; // d1 is re-assignable

// // assignment pattern
// const numbers = [];
// const obj3 = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj3);
// console.log(numbers)
// // The properties `a` and `b` are assigned to properties of `numbers`

// // default value 
// const [val1 = 1] = []; // val1 is 1
// const { val2 = 2 } = { b: 3, val2: 4 }; // val2 is 4 , default value evaluated only if val2 not present
// const { val3 = 2 } = { c: null }; // val3 is 2
// console.log(val1,val2,val3)

// // more examples
// const foo = ["one", "two"];

// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); // undefined

// // swapping in destructuring way
// // let [num1, num2] = [1,2];
// // [num1, num2]= [num2, num1];
// // console.log(num1, num2);

// // parsing an array returned value
// function f() {
//     return [1, 2];
//   }
  
//   const [c1, c2] = f();
//   console.log(c1); // 1
//   console.log(c2); // 2
  
// // ignoring returned values
// function f() {
//     return [1, 2, 3];
//   }
  
//   const [e, , g] = f();
//   console.log(e); // 1
//   console.log(g); // 3
  
//   const [c] = f();
//   console.log(c); // 1

// //   const { a6, ...{ b6 } } = { a6: 1, b6: 2 };
// // SyntaxError: `...` must be followed by an identifier in declaration contexts

// let a7, b7;
// // ({ a7, ...{ b7 } } = { a7: 1, b7: 2 }); // rest element cannot contain a binding pattern
// // SyntaxError: `...` must be followed by an assignable reference in assignment contexts


// // Object destructuring and renaming and providing default values
// // const user = {
// //     id: 42,
// //     isVerified: true,
// //   };
  
// //   const { id: identifier, isVerified, place = 'Mumbai' } = user;
  
// //   console.log(identifier); // 42
// //   console.log(isVerified); // true
// //   console.log(place); // Mumbai

//   // Destructuring objects passed as function parameters
//   const userInfo = {
//     id: 42,
//     displayName: "jdoe",
//     fullName: {
//       firstName: "Jane",
//       lastName: "Doe",
//     },
//   };

//   function userId({id}) {
//     return id;
//   }
//   console.log(userId(userInfo))

//   // unpack and rename
//   function displayName({displayName: name}) {
//     return name;
//   }
//   console.log(displayName(userInfo))

//   // Unpacking nested objects
//   function firstName({fullName: {firstName: fName}, place = 'Mumbai'}) {
//     return {fName, place};
//   }
//   console.log(firstName(userInfo))

//   // to get third element
// //   const props = [
// //     { id: 1, name: "Fizz" },
// //     { id: 2, name: "Buzz" },
// //     { id: 3, name: "FizzBuzz" },
// //   ];
  
// // //   const [, , { name }] = props;
  
// //   console.log(name); // "FizzBuzz"
  
//   // Prototype is looked up on destructuring
//   const obj8 = {
//     self: "123",
//     __proto__: {
//       prot: "456",
//     },
//   };
//   const { self, prot } = obj8;
  
//   console.log(self); // "123"
//   console.log(prot); // "456"
// console.log('****************************')

// // const defaultTheme = {
// //     theme: 'teal',
// //     language: 'EN',
// // }
// // const userTheme = {
// //     theme: 'blue',
// //     __proto__: defaultTheme
// // }

// // let {theme, language } = userTheme
// // console.log(language);


// getNutritionInfo('1 banana').then(({foods}) => {
//     // object restructuring
//     for (const {food_name, serving_qty: qty, nf_protein: protein} of foods) {
//         console.log(food_name, qty, protein);
//     }
// })

// // array destructuring
// let [num1, , ...rest] = [1,3,4,6,8]; // 2nd element is ignored
// console.log(num1); // 1
// console.log(rest); // [4,6,8]


// // Nested destructuring
// const user = {
//     name: 'Myra',
//     address: {
//         country: 'India'
//     }
// }
// const {address: {country}} = user
// console.log('add', country); // India

// // swapping using array destructuring
// var num2 =1
// [num1,num2] = [num2, num1]
// console.log(num1,num2); // 3,1

// // If key not present in object, checks its prototype
// const defaultTheme = {
//     theme: 'teal',
//     language: 'EN',
// }
// const userTheme = {
//     theme: 'blue',
//     __proto__: defaultTheme
// }
// const {theme, language = 'TN' } = userTheme
// console.log(theme);
// console.log(language); // EN

// const user1 = {
//     username: "Pranee",
//     school: "CRS",
//     country: 'India',
//     marks: [82,93,86,90,88]
// }
// const user2 = {
//     username: "Tira",
//     school: "CRS"
// }
// // destructuring function parameters
// function getCountry({country = 'US'}) {
//     return country;
// }
// console.log(getCountry(user1)); // India
// console.log(getCountry(user2)); // US

// // extracting length property of the array marks
// function getTotalSubjects({marks: {length}}) {
//     return length;
// }
// console.log(getTotalSubjects(user1));

// // Object creation patterns
// console.log("**************Object Creation Patterns***************")
// // Object Literal pattern
// var food = {
//     foodName: 'apple',
//     qty: 1
// }
// console.log(food);

// // Factory pattern
// const objectFactory = function(foodName, qty) {
//   var food = {}
//   food.foodName = foodName;
//   food.qty = qty
  
//   food.getFood = function () {
//   	console.log(this.foodName, this.qty)
//   }
//   return food;
// }

// var food1 = objectFactory('banana', 2)
// var food2 = objectFactory('dragon fruit', 1)
// food1.getFood()
// food2.getFood()

// // Constructor pattern
// var constructorPattern = function(foodName, qty) {
//   this.foodName = foodName;
//   this.qty = qty;
//   this.getFood = function() {
//   	console.log(this.foodName, this.qty)
//   }
// }

// var c3 = new constructorPattern('apple',4)
// var c4 = new constructorPattern('grapes',10)
// c3.getFood()
// c4.getFood()

// // Prototype pattern
// var prototypePattern = function () {}
//     prototypePattern.prototype.foodName = NaN
//     prototypePattern.prototype.qty = NaN
//     prototypePattern.prototype.getFood = function() {
// 	    console.log(this.foodName, this.qty)
//     }
// // objects created with prototypepattern obj as prototype
// var c5 = new prototypePattern();
// var c6 = new prototypePattern();
// c5.foodName = 'berry';
// c5.qty = 5;
// c6.foodName = 'cherry';
// c6.qty = 9;
// c5.getFood();
// c6.getFood();
// // Dynamic Prototype pattern - Hybrid of constructor and prototype pattern
// var dynamicPrototype = function(foodName, qty) {
//     this.foodName = foodName;
//     this.qty = qty;
//     // If multiple instances are created, same method will be used
//     if (typeof this.getFood !== 'function') {
//         dynamicPrototype.prototype.getFood = function() {
//         console.log(this.foodName, this.qty);
//       };
//     }
// };
// // Object created with foodname and qty as properties and getFood as prototype
// var food3 = new dynamicPrototype('mango',2);
// food3.getFood();
// var food4 = new dynamicPrototype('guava',2);
// food3.getFood();

// // Using Object.create()
// var food = {
//   foodType: 'fruit',
//   qty: 3
// }
// // fruit1 with food prototype created
// var fruit1 = Object.create(food)
// console.log(fruit1)

// // fruit2 with food prototype created + its own properties
// var fruit2 = Object.create(food, {foodName: {value: 'avacado'}});
// console.log(fruit2); // {foodName: 'avacado'}

// // New Keyword and constructors
// console.log('************************NEW KEYWORD AND CONSTRUCTOR')
// // Using new with functions
// // getPlantsInfo().then(res => {
// //     console.log(res);
// // }, error => {
// //     console.log(error);
// // })

// // Using new keyword with functions
// function Plant(commonName, scientificName, family) {
//     // If function invoked without new keyword
//     if (!new.target) {
//         return {commonName, scientificName, family}
//     }
//     this.commonName = commonName;
//     this.scientificName = scientificName;
//     this.family = family;
// }

// var plant1 = new Plant('Tufted hairgrass', 'Deschampsia cespitosa', 'Poaceae');
// var plant2 = new Plant('Cow-parsnip', 'Heracleum sphondylium', 'Apiaceae');
// console.log(plant1.commonName); // Tufted hairgrass
// console.log(plant2.commonName); // Cow-parsnip

// var plant3 = Plant('Sloe', 'Prunus spinosa', 'Rosaceae');
// console.log(plant3.commonName); // Sloe

// // Using new keyword with classes
// class Plants {
//     constructor(commonName, scientificName, family) {
//         this.commonName = commonName;
//         this.scientificName = scientificName;
//         this.family = family;
//     }
//     printPlantInfo() {
//         console.log('Parent:', this.commonName, this.scientificName, this.family);
//     }
// }

// // derived class
// class SubSpecies extends Plants {
//     // If no constructor provided here, by default calls parent constructor with the passed arguments
//     constructor(commonName, scientificName, family, subspeciesName) {
//         // explicitly call parent constructor
//         super(commonName, scientificName, family);
//         this.subspeciesName = subspeciesName;
//     }
//     printPlantInfoDerived() {
//         console.log('Sub: ',this.commonName, this.scientificName, this.family, this.subspeciesName)
//     }
// }

// var plant3 = new SubSpecies('Cork oak', 'Quercus suber', 'Fagaceae');
// plant3.printPlantInfo();
// plant3.printPlantInfo();

// // ES6 Classes
// console.log("*************************ES6 Classes************************")

// // Class Declaration
// class Food {
//     constructor(foodName, qty) {
//         this.foodName = foodName;
//         this.qty = qty;
//     }

//     displayFood() {
//         console.log(this.foodName, this.qty);
//     }
// }

// var food1 = new Food('Avacado',3);
// var food2 = new Food('Berry',4);
// food1.displayFood();
// food2.displayFood();

// // Pre-ES6 Equivalent code - using functions
// function Food (foodName, qty) {
//     this.foodName = foodName;
//     this.qty = qty
// }
// Food.prototype.displayFood = function() {
//     console.log(this.foodName, this.qty);
// }

// var food3 = new Food('Apple',3);
// var food4 = new Food('Banana',4);
// food3.displayFood();
// food4.displayFood();

// // Class Expression - class can be anonymous or named
// const FoodFactory = class {
//     // public field
//     foodType = 'Fruits';
//     // private field
//     #foodPriceMax = 100;
//     constructor(foodName, qty) {
//         this.foodName = foodName;
//         this.qty = qty;
//     }

//     // getter method - public instance
//     get foodPriceMax() {
//         return this.#foodPriceMax;
//     }

//     // setter method - public instance
//     set foodPriceMax(price) {
//         this.#foodPriceMax = price;
//     }
//     displayFood() {
//         console.log(this.foodName, this.qty);
//     }
// }

// const food5 = new FoodFactory('Avacado',3);
// const food6 = new FoodFactory('Berry',4);
// food5.displayFood();
// food6.displayFood();
// console.log('Before setting', food5.foodPriceMax); // 100
// food5.foodPriceMax = 200;
// console.log('After setting', food5.foodPriceMax); // 200

// Static Classes
class AreaCalculator {
    constructor() {
        // static instances not accessible using this keyword from non-static methods
        console.log(AreaCalculator.pi);
        console.log(this.constructor.pi);
        console.log(AreaCalculator.area(10));
        console.log(this.constructor.area(10));
    }
    // static instance
    static pi
    // static initialization block
    static {
        this.pi = 3.14
    }
    // static method
    static area(radius) {
        console.log(this.pi); //3.14
        return AreaCalculator.pi * radius * radius;
    }
}

var area1 = new AreaCalculator();

// Symbols - primitive 
// used to add unique property keys to an object that won't collide with keys any other code might add to the object
// hidden from any mechanisms other code will typically use to access the object

// creating symbols
const sym1 = Symbol();
const sym2 = Symbol("id");// unique throughout the lifetime of the program
const sym3 = Symbol("id");
console.log(sym2===sym3); //false

// Symbol with new operator throws error
// const sym = new Symbol(); // TypeError

// Shared symbols in the global Symbol registry
const sym4 = Symbol.for("token");
console.log(Symbol.for('token') === sym4); // true
console.log(Symbol.keyFor(sym4) === 'token'); //true

//Well known symbols - hasInstance and iterator
// Static properties are all well-known symbols
// static methods - for, keyFor

// Objects can have keys of type string and Symbols only
// Symbols always return a unique value, avoids key collision

// creating Symbols
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

// Symbols allow us to create hidden properties
let user = {
    name: 'Praneetha'
}
let pwd = Symbol('id');
user[pwd] = 'pranee123'

// 3rd party code cannot override this
let pwd2 = Symbol('id')
user[pwd2] = 'pranee456'

//Global Symbols
var sym5 = Symbol.for('id');
console.log(Symbol.keyFor(sym5) === 'id'); // true

// Well known symbols
// Symbol.iterator
let range = {
    from: 1,
    to: 5
};






