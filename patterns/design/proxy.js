// Proxy = stand in for somebody else
// i.e instead of interacting with target object, interact with Proxy object
const hr = {
    name: 'Hari',
    age: 40,
    unit: 'AI'
};
// Proxy Object for hr; 2nd argument - handler
// 2 common handlers are get (access a property) and set (modify a property)
const hrProxy = new Proxy(hr, {
    get: (obj, prop) => {
        // Accesing Using object bracket notation
        // console.log(`Value of ${prop}: ${obj[prop]}`);
        // Reflect - intercepts javascript object operations
        console.log(`Value of ${prop}: ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
        console.log(`Value changed from ${obj[prop]} to ${value}`);
        // Setting using object bracket notation
        // obj[prop] = value;
        // return true;
        // same arguments as proxy handler methods
        return Reflect.set(obj, prop, value);
    }
});

// Values of hr accessed and modified using hrProxy object
hrProxy.name; // Value of name: Hari
hrProxy.unit = 'ML'; // Value changed from AI to ML
console.log(hr); // { name: 'Hari', age: 40, unit: 'ML' }

// Validations using Proxy
// Proxy helps in not modifying the actual object with faulty values
const hrProxy2 = new Proxy(hr, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log(`${prop} does not exist in hr object.`)
        } else {
            console.log(`Value of ${prop} is ${obj[prop]}`);
        }
    },
    set: (obj, prop, value) => {
        if (prop === 'age' && typeof value !== 'number') {
            console.log('Oopsie! Age should be just a number.')
        } else if (prop === 'name' && value.length>15) {
            console.log('Name should be less that 15 characters');
        } else if (prop === 'unit' && !['AI', 'ML', 'ROBOTICS'].includes(value)) {
            console.log('Oopsie! That is an invalid unit.');
        } else {
            console.log(`Value of ${prop} is successfully changed to ${value}.`);
            Reflect.set(obj, prop, value);
        }
        return true;
    }
});
hrProxy2.unit = 'SAP'; // Oopsie! That is an invalid unit.
hrProxy2.unit = 'ML'; // Value of unit is successfully changed to ML.
