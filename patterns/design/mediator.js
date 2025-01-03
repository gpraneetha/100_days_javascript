// Mediator Pattern - Behavioural DP
// loose coupling btw objects, centralizing communication btw them
// used when multiple objects need to interact and want to avoid tight coupling btw objects
// Components:
// 1. Mediator: Interface for defining communication btw objects within system
// 2. Colleague: Individual Objects that need to communicate with each other

// Mediator: AirTrafficControl
class AirTrafficControl {
    requestTakeoff(plane) {
        console.log(`Air Traffic Control grants takeoff clearance for ${plane.getName()}.`);
    }

    requestLanding(plane) {
        console.log(`Air Traffic Control clears ${plane.getName()} for landing.`);
    }
}

// Colleague: Plane
class Plane {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    requestTakeoff() {
        console.log(`${this.name} requests takeoff clearance.`);
        airTrafficControl.requestTakeoff(this);
    }

    requestLanding() {
        console.log(`${this.name} requests landing clearance.`);
        airTrafficControl.requestLanding(this);
    }
}

const airTrafficControl = new AirTrafficControl();
const plane1 = new Plane('Flight 123');
const plane2 = new Plane('Flight 456');

plane1.requestTakeoff();
plane2.requestLanding();

// Pros: 1. Decoupling-reduces direct dependencies btw objects
// 2. Centralized communication
// 3. Reusability
// 4. Single responsibility principle - isolates communication relation logic in one place
// Cons: 1. Can add complexity to system if interactions btw objects are straightforward
// 2. Performance overhead
// 3. Maintaining the mediator
// 4. Focus on facilitating communication not on handling all logic