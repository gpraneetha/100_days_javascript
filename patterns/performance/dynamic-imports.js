// dynamic imports are evaluated only when needed
// returns a promise
// import using then catch clause
import ('./math.js').then((math) => {
    console.log(math.add(5,10)); // 15
}).catch((err) => console.log('Error: ', err))

// import using await
const math = await import('./math.js');
console.log(math.multiply(2,5)); // 10

// importing on demand based on user action
function userClick(a, b) {
    import('./math.js').then(math => {
        console.log(math.multiply(a, b)); // 8
    })
}
userClick(4,2);

// importing different module based on some condition or environment
let meraModule;
async function calculateSquare(input) {
    if (typeof input === 'object') {
        meraModule = await import('./mathArr.js');
    } else if (typeof input === 'number') {
        meraModule = await import('./math.js');
    }
    return meraModule.square(input);
}
console.log(await calculateSquare([2,3,4])); // [4, 9, 16]
console.log(await calculateSquare(5)); // 25
// importing modules with non-literal specifier
Promise.all(
    [1,2,3,4].map((val) => import(`./users/user-${val}.js`))
    ).then((modules) => modules.forEach((module) => module.loadUser()));
// Difference b/w Static & Dynamic Imports
// Static Imports - immediately available in the application; imports evaluated in load time
// easy to optimize and tree shake
// Dynamic Imports - loaded only when needed hence faster initial loads
// decreased user experience if not loaded by the time they are needed

