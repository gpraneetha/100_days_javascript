// add functionality to a objects or classes without inheritance
class Person {
    constructor(name) {
        this.name = name;
    }
}
// mixin
const personFunctionality = {
    eat: () => console.log('Eat!'),
    sleep: () => console.log('Sleepzzz!')
}
// a mixin can use inheritance
const developerFunctionality = {
    __proto__: personFunctionality, 
    code: () => console.log('Code!'),
    eat() { super.eat() },
    sleep() { super.sleep() }
}
Object.assign(Person.prototype, developerFunctionality);
const person1 = new Person('Praneetha');
console.log(person1.name); // Praneetha
person1.code(); // Code!
person1.eat(); // Eat!
person1.sleep(); // Sleepzzz!
