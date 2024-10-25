// Set of values without keys, where each value occurs only once
let set = new Set(); // Creation of set
let user1 = { name: 'Praneetha' };
let user2 = { name: 'Rishi' };
let user3 = { name: 'Sushma' };
set.add(user1);
set.add(user2);
set.add(user3);
// not added to set since user1 already present in set
set.add(user1);
console.log(set.size); // 3
// Iterating over set using for of or forEach loops
for (let user of set) {
    console.log(user.name); // Praneetha Rishi Sushma
}
set.forEach(user => {
    console.log(user.name); // Praneetha Rishi Sushma
});
console.log(set.delete(user1)); // true
console.log(set.size); // 2
console.log(set.has(user1)); false
// Removes everything from set
console.log(set.clear());
// Used mostly for removing duplicates from Arrays
let numbers = [2,77,77,8,9,10,9,1,2];
console.log([...new Set(numbers)]); //[ 2, 77, 8, 9, 10, 1 ]