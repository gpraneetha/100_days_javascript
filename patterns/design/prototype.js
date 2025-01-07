// share properties among many objects of same type
// accessed through prototype chain
class Person {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('Eat!!')
    }
}
const person1 = new Person('Pranee');
const person2 = new Person('Tirzah');
Person.prototype.sleep = () => console.log('Sleepzzz!');
console.log(person1.__proto__);
console.log(person2.__proto__);
class Developer extends Person {
    constructor(name) {
        super(name);
    }
    code() {
        console.log('Code!');
    }
}

const developer1 = new Developer('Claire');
// able to access Person functions - checks Person prototype in the prototype chain
developer1.eat(); // Eat!
console.log(Developer.__proto__); // [class Person]

// Creates a new object with the explicitly passed values prototype
const developer = {
    code() {
        console.log('Code!');
    },
    debug() {
        console.log('Debug!');
    }
};
const dev1 = Object.create(developer);
dev1.debug(); // Debug!
console.log(dev1.__proto__); // { code: [Function: code], debug: [Function: debug] }

