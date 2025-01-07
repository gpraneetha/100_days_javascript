//Structural DP - Minimize memory usage by sharing data for related objects
class Book {
    constructor(book) {
        this.book = book;
    }
    operation(id) {
        // Intrinsic - peroperties shared among related objects
        console.log('Intrinsic Property: ', this.book);
        // Extrinsic - properties that are unique to every object
        console.log('Extrinsic Property: ', id);
    }
}

// Class to manage and reuse the shared properties
class FlyWeightFactory {
    constructor() {
        this.data = {};
    }
    // returns the instance for that book
    getData(sharedData) {
        // creates a book instance if object is not already existing
        if (!this.data[sharedData]) {
            this.data[sharedData] = new Book(sharedData);
        }
        return this.data[sharedData];
    }
    // returns the number of Book instances created
    getFlyWeightCount() {
        return Object.keys(this.data).length;
    }
}

const factory = new FlyWeightFactory();
const book1 = factory.getData('War and Peace');
book1.operation('123');
const book2 = factory.getData('Pride and Prejudice');
book2.operation('234');
const book3 = factory.getData('War and Peace');
book3.operation('456');
console.log(factory.getFlyWeightCount());

// pros:
// 1. Reduces m/y usage by sharing data b/w objects
// 2. Inproves performance
// 3. Efficient Resource utilization
// 4. Reduces redundant code by extracting common state
// cons:
// 1. Dependency on Factory class
// 2. Increased complexity

// https://www.geeksforgeeks.org/flyweight-design-pattern-javascript-design-pattern/