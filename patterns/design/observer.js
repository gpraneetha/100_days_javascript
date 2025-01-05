// subscribe observers to another object called observables
// whenever an event occurs , observable notifies all its observers
class Observable {
  constructor() {
    // an array of observers that get notified whenever a specific event occurs
    this.observers = [];
  }
  // add observers to observers list
  subscribe(func) {
    this.observers.push(func);
  }
  // remove observers from observers list
  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }
  // notify all observers whenever an event occurs
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
const observable = new Observable();

function logger(data) {
    console.log('Data: ', data);
}
function alert(data) {
    console.log('Alert Data: ', data);
}
// logger and alert called whenever an observer is notified
observable.subscribe(logger);
observable.subscribe(alert);

// Notify whenever user clicks button
function clickButton() {
    observable.notify('User clicked button!');
}

clickButton();
