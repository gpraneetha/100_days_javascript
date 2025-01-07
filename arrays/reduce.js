// Iterative Method
// runs reducer callback on each element; passes return value of preceding element
// Parameters: callback fn : accumulator, currentValue, currentIndex, array; initialValue
// Return: value returned after executing over the entire array
const numbers = [1,2,3,4];
const initial = 0;
// 1. finding sum of array
// with initial value => 0+1+2+3+4
// callback executed for values from index 0
const sum = numbers.reduce(
    (accumulator, currentValue, idx) => {
        const value = accumulator + currentValue;
        console.log(`Index ${idx}: `, value);
        console.log('Accumulator', accumulator);
        console.log('Current Value', currentValue);
        return value;
    }, initial
);
console.log(sum);

// without initial value => 1+2+3+4
// Callback executed for values from index 1
const sumWithoutInitial = numbers.reduce(
    (accumulator, currentValue, idx) => {
        const value = accumulator + currentValue;
        console.log(`Index ${idx}: `, value);
        console.log('Accumulator', accumulator);
        console.log('Current Value', currentValue);
        return value;
    }
);
console.log(sumWithoutInitial);

const empty = [];
// const sum3 = empty.reduce((acc,cur) => acc+cur); // TypeError: Reduce of empty array with no initial val
const sum4 = empty.reduce((acc,cur) => acc+cur, 0);
console.log(sum4); // 0

// sum of values in object
var fruits = [{
    name: 'Apricot',
    price: 200
},{
    name: 'Berry',
    price: 280
}];
// with initial value => 0+200+280
const totalPrice = fruits.reduce((accumulator, currentValue) => {
    console.log('Accumulator: ', accumulator);
    console.log('Current Value: ', currentValue);
    return accumulator + currentValue.price;
},0)
console.log(totalPrice);
// without initial value => 200+280
const totalPrice2 = fruits.reduce((accumulator, currentValue) => {
    console.log('Accumulator: ', accumulator);
    console.log('Current Value: ', currentValue);
    return accumulator.price + currentValue.price;
});
console.log(totalPrice2);

// 2. Function Piping 
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);
const addGst = (price) => price + 40;
const addCst = (price) => price + 20;
const discount = (price) => price - 10;
const total = pipe(addGst, addCst, discount);
console.log(total(100));

// 3. Reduce with Promises
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

async function subtract10(a) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Promise 1 resolved');
            resolve(a-10);
        },1000);
    });
}
async function product3(a) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Promise 2 resolved');
            resolve(a*3);
        },1000);
    });
}
async function add5(a) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Promise 3 resolved');
            resolve(a+5);
        },1000);
    });
}

asyncPipe(add5,subtract10,product3)(10).then(value => console.log(value)); //15

// Equivalent sum of array code using for of
// mutates a variable; in reduce no mutation of a variable
let tsum = 0
for (const num of numbers) {
    tsum += num
}
console.log(tsum); // 10

// Anti Patterns
// 1. copying an array or object in each iteration
const fruitsList = ['Apricot', 'Avacado', 'Berry', 'Avacado','Apricot'];
const countFruits = fruitsList.reduce((allFruits, currentFruit) => {
    // hasOwn checks if currentFruit key is present in the object
    const count = Object.hasOwn(allFruits, currentFruit) ? allFruits[currentFruit] : 0;
    // copies entire array on each iteration
    return {
        ...allFruits,
        [currentFruit]: count+1
    }
}, {});
console.log(countFruits);
// use for of instead

// 2. Flattening an array of arrays
const array = [[10,20],[50,70]];
// O(T^2); N is the total number of elements in flattened array
// reduce iterates over array.length (n) elements O(n) + concat operation O(k+m); k=acc.length,m=cur.length
const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened); // [ 10, 20, 50, 70 ]
// use flat method instead
const flattenedArr = array.flat();
console.log(flattenedArr); // [ 10, 20, 50, 70 ]

// 3. Grouping objects
const studentsInfo = [{
    name: 'Praneetha',
    course: 'Computer'
},{
    name: 'Sushma',
    course: 'Computer'
}, {
    name: 'Rishi',
    course: 'EC'
}];
const groups = studentsInfo.reduce((acc, cur) => {
    const key = cur.course;
    const curGroup = acc[key] ?? [];
    // creating objects and recreating arrays on each iteration
    return { ...acc, [key]: [...curGroup, cur] };
  }, {});
console.log(groups);
// use maps or Object.groupBy(not available yet) instead 

// 4. Concatenating arrays
const students = studentsInfo.reduce((acc, cur) => [...acc, cur.name], []);
console.log(students); // [ 'Praneetha', 'Sushma', 'Rishi' ]
// use flat map instead
const students1= studentsInfo.flatMap(user => user.name);
console.log(students); // [ 'Praneetha', 'Sushma', 'Rishi' ]

// 5. Removing duplicate items
const uniqFruits = fruitsList.reduce(
    (acc, cur) => acc.includes(cur) ? acc : [...acc, cur],
    [],
);
console.log(uniqFruits); // [ 'Apricot', 'Avacado', 'Berry' ]
// use Set instead
const uniqFruits2 = [...new Set(fruitsList)];
console.log(uniqFruits2); // [ 'Apricot', 'Avacado', 'Berry' ]

// 6. Adding/Removing elements from array
const allNumbers = [1,2,3,4,5,6,7,8,9];
const even = allNumbers.reduce((result, current) => {
    if (current%2===0) {
      result.push(current); // Add to the result array if condition is true
    }           
    return result; // Return the accumulated result
  }, []);
console.log(even);

//use filter instead
const even2 = allNumbers.filter(number => number % 2===0);
console.log(even2);

// 7. Testing if all elements in array satisfy a condition
const weights = [30,60,50,40,90];

// use every or some instead
const isFit = weights.every(weight => weight>30 && weight<=60);
console.log(isFit); // false

