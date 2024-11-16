// keys must be objects not primitive values
let weakMap = new WeakMap();
let user = { name: 'Praneetha' };

weakMap.set(user, "ok"); 

// can't set strings as key
// weakMap.set('test', "oops"); // TypeError: Invalid value used as weak map key
console.log(weakMap.get(user)); // ok
// user obj removed from memory and from weakmap automatically unlike maps
user = null;
console.log(weakMap.get(user)); // undefined

// Methods
let fruit = {fruit: 'Strawberry'}
console.log(weakMap.set(fruit), 2);
console.log(weakMap.get(fruit));
console.log(weakMap.has(user));
console.log(weakMap.delete(fruit));
// Doesnt support iteration methods like keys() values() entries()

// Usecase 1: additional data storage
let employee1 = { name: 'Tirzah' };
let pointsMap = new WeakMap();
function addPoints(points, employee) {
    let count = pointsMap.get(employee) || 0;
    pointsMap.set(employee, count+points);
}
// once employee leaves organization, removes employee details and points information from map
employee1 = null;

// Usecase 2: caching
let cache = new WeakMap();
function process(obj) {
    if (!cache.has(obj)) {
        let config = { displayName: 'GP'};
        cache.set(obj, config);
        return config;
    }
    return cache.get(obj);
}
let user1 = { name: 'Praneetha' };
console.log(process(user1));
// calling process later with the same key will fetch from cache
console.log(process(user1));
// object removed from cache as well
user1 = null;


