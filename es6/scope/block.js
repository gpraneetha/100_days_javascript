// function scoped or global scoped
var user = 'Tirzah';
if  (true) {
    var user = 'Praneetha';
    var subject = 'Computer';
    console.log(user); // Praneetha
}
console.log(user); // Praneetha
console.log(subject); // Computer

function myFavourites() {
    var language = 'Javascript';
}
//console.log(language); // Reference Error: language is scoped to myFavourites function

// var declarations are Hoisted - variable declarations are hoisted
console.log(movie); // undefined
var movie = 'The Terminator';
console.log(movie); // The Terminator

// can be redeclares
var x = 10;
var x = 15;
console.log(x); // 15
var x;
console.log(x); // 15

// var declarations cannot be in the same scope as let, const, class or import
var fruit = 'Avacado';
// let fruit = 'Berry'; // Syntax Error: fruit has already been declared

// if they are in child scope of var then its fine
var veggie = 'Beans';
{
    let veggie = 'Carrot';
}

// declaring and initializing 2 variables
var fruit1 = 'Avacado', fruit2 = 'Berry';

// Challenge: What is the output?
var x = y,
  y = "A";
console.log(x, y); // undefined A

var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally. with strict mode throws Reference Error: y is not defined
}
f();

console.log(x, y); // 0 1

// Destructing with vars
const movies = ['Arrival', 'Alien', 'Interstellar'];
const [, movie1, movie2] = movies;
console.log(movie1, movie2); // Alien Interstellar