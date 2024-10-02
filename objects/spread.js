// Spread Operator
function calculateTotalPrice(p1,p2,p3) {
    return p1+p2+p3
}
const fruitsPrice = [100,180,20]
// expands array into its elements; // Only iterable items can be spread in arguments
calculateTotalPrice(...fruitsPrice);

// same operation as using spread arguments using apply; cannot use apply with new
calculateTotalPrice.apply(null, fruitsPrice);

const fruits = ['Apple','Banana'];
const vegetables = ['Broccoli', 'Beans'];
// Only iterable items can be spread in array literals; concatenate two arrays
const items = [...fruits, ...vegetables];
console.log(items);

// Objects are not iterable except if they have Symbol.iterable defined
let rangeObj = {
    from: 2,
    to: 8,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};
const rangeList = [...rangeObj];
console.log(rangeList); // [2, 3, 4, 5, 6, 7, 8]

// Spreading objects in object is possible
const otherNutriInfo = {
    carb: 0.36,
    sugar: 0.19
}
const nutriInfo = {
    proteins: 6.28,
    fat: 4.6,
    ...otherNutriInfo
}
console.log(nutriInfo); // { proteins: 6.28, fat: 4.6, carb: 0.36, sugar: 0.19 }

const fruitsObj = {...fruits};
console.log(fruitsObj); // { '0': 'Apple', '1': 'Banana' }

// copy and merge objects
const allInfo = {
    ...nutriInfo,
    ...fruitsObj
}

// overriding properties; since proteins key comes in both objects, last one assigned will be taken
let nutriInfo2 = {
    proteins: 8.0
}
const allNutriInfo = {
    ...nutriInfo,
    ...nutriInfo2
};
console.log(allNutriInfo);

// conditionally adding property to object
const isSummer = true;
// method1
const allFruitsObj = {
    ...fruits,
    ...(isSummer ? ['Watermelon'] : []) 
}
console.log(allFruitsObj); // { '0': 'Watermelon', '1': 'Banana' }; Apple got replaced with Watermelon
// method2
const allFruitsObj2 = {
    ...fruits,
    ...(isSummer && ['Watermelon'])
}
console.log(allFruitsObj2); // { '0': 'Watermelon', '1': 'Banana' };

// shallow copy array
const fruitsCopy = [...fruits];
fruitsCopy.push('Grapes');
console.log(fruitsCopy); // [ 'Apple', 'Banana', 'Grapes' ]
console.log(fruits); // [ 'Apple', 'Banana' ], fruits not affected by above push

// conditionally adding values to array
const allFruits = [...fruits, ...(isSummer ? ['Watermelon']: [])] ;
console.log(allFruits);

// without rest operator in else case undefined gets pushed
// const allFruits = [...fruits, isSummer ? 'Watermelon': undefined] ;


