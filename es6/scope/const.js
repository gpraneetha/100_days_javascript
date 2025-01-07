// scope: block and function;
// console.log(API_URL); // Reference Error; in temporal dead zones
// const API_URL; // Syntax ERror: const must be initialized
const API_URL = 'https://api.example.com';

// API_URL = 'http://api.example.com'; // Type Error: cannot be re-assigned
// const API_URL = 'http://api.example.com'; // Syntax Error: cannot be redeclared

// if (true) const x = 1; //Syntax error'const' declarations can only be declared inside a block.ts(1156)

// Objects
const config = {
    apiUrl: API_URL,
    maxRetries: 3
};
// config = {
//     apiUrl: 'anotherURl',
//     maxRetries: 5
// }; // TypeError: Cannot reassign objects

// Mutation of const objects is possible; to prevent mutation use Object.freeze
config.maxRetries = 5;
console.log(config.maxRetries); // 5

// Arrays
const movies = ['Arrival', 'Alien', 'Interstellar'];
movies.push('The Matrix');

// Destructuring with const
const [,movie1, movie2, movie3] = movies;
console.log(movie1, movie2, movie3); // Alien Interstellar The Matrix

