// reassignable, block scoped, optionally initializing a value
// scoped to block and functions;
//Throws Reference error - in temporal dead zones - hence cannot be accessed before declaration
// console.log(movies);
let user;
console.log(user); // undefined - No error

let movies = ['Unlocked', 'Outside', 'No Exit']
user = 'Tirzah';
if (user === 'Tirzah') {
    let movies = ['The Silence', 'CTRL', 'The Ritual'];
    console.log(movies);
}
console.log(movies);

// Cannot redeclare let variables - Throws Syntax Error
// let user = 'Praneetha';
console.log(this.movies); // let does not create property on global object

// Challenge; what is the output?
// function getMovies(movies) {
//     console.log(movies);
//     for (let movies of movies['scifi']) {
//         console.log(movies);
//     }
// }
// getMovies({'scifi': ['Arrival','Alien','Interstellar']});

// declaring with destructuring
let [,movie1,movie2] = ['Arrival', 'Alien', 'Interstellar'];
console.log(movie1,movie2); // Alien Interstellar