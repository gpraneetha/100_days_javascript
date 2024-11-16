// analagous to sets, but only object keys
// creation of WeakSet
let weakSet = new WeakSet();

let user1 = { name: 'Praneetha' };
let user2 = { name: 'Mary' };

weakSet.add(user1);
weakSet.add(user2);
weakSet.add(user1); // Not added again since user1 already present

console.log(weakSet.has(user1)); // true
// user1 removed from weakSet as well
user1 = null;
console.log(weakSet.has(user1)); // false
// does not support size or iteration methods
