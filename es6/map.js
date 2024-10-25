// map is a collection of keyed data objects
// keys can be of any type unlike objects which can have only string keys

let map = new Map(); // Creates a Map

map.set('1', 'string1'); // string key
map.set(1, 'num1'); // number key
map.set(true, 'bool1'); // boolean key
map.set({name: 'Praneetha'}, 123); // object key
// above can be chained and written as below
// map.set('1', 'string1')
//     .set(1, 'num1')
//     .set(true, 'bool1')
//     .set({name: 'Praneetha'}, 123);

// does not convert keys type to string like objects
console.log(map.get(1)); // num1
// check if map has a key
console.log(map.has('1')); // true;
console.log(map.size); // 4

// removes element in map with the key
map.delete(true);
// removes everything from map
map.clear();

// Iteration over map - map preserves the order in which it is inserted unlike objects
let fruitMap = new Map([
    ['berry', 5],
    ['avacado',3],
    ['dragon fruit', 1]
]);
// iterate over keys
for (let fruit of fruitMap.keys()) {
    console.log(fruit);
}
// iterate over values
for (let qty of fruitMap.values()) {
    console.log(qty);
}
// iterate over key values
for (let fruitItem of fruitMap.entries()) {
    console.log(fruitItem); // [ 'berry', 5] [ 'avacado', 3] [ 'dragon fruit', 1]
}
fruitMap.forEach((value, key) => {
    console.log(key, value); // berry 5 avacado 3 dragon fruit 1
});
// Object to Map
let userObj = {
    name: 'Tirzah',
    id: 123
};
let userMap = new Map(Object.entries(userObj));
console.log(userMap.get('name'));
// Map to Object
let obj = Object.fromEntries(userMap.entries());
console.log(obj['name']);
console.log(obj['id']);
