const millets = ['foxtail', 'finger', 'barnyard', 'pearl', 'sorghum'];
const [millet1, millet2] = millets;
console.log(millet1, millet2); //foxtail finger
// Default property
const [a = 1] = []
console.log(a); // 1
// Rest property
const grains = ['wheat', 'rice', 'barley', 'maize', 'oats'];
const [wheat, ...others] = grains;
console.log(others); // [ 'rice', 'barley', 'maize', 'oats' ]

// swapping
let b1 = 10;
let b2 = 30;
[b1,b2] = [b2,b1]

// Parsing array returned from function
function getMillets() {
    return ['foxtail', 'finger', 'pearl'];
}
const [milletA, , milletB] = getMillets();
console.log(milletA); // foxtail
console.log(milletB); // pearl

// using binding pattern as rest property
const [milletC, milletD, ...{ length }] = ['foxtail', 'finger', 'pearl'];
console.log(a, b, length); // foxtail finger 1


