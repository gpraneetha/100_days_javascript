class FruitManager {
  constructor() {
    this.fruits = [];
  }

  addFruit(fruit) {
    this.fruits.push(fruit);
    return `You have added ${fruit}`;
  }

  removeFruit(fruit) {
    this.fruits = this.fruits.filter((fruit) => fruit !== fruit);
    return `You have removed ${fruit}`;
  }
}

const manager = new FruitManager();
manager.addFruit("Avacado");
manager.addFruit("Berry");
manager.removeFruit("Berry");
// Downside: If we change any method name in class, need to change everywhere we are invoking method using object

// Command Pattern
class FruitCmdManager {
  constructor() {
    this.fruits = [];
  }

  execute(command, ...args) {
    return command.execute(this.fruits, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function addFruitCommand(fruit) {
  return new Command((fruits) => {
    fruits.push(fruit);
    console.log(`You have successfully added ${fruit}!`);
  });
}
function removeFruitCommand(fruit) {
  return new Command((fruits) => {
    fruits = fruits.filter((fruit) => fruit !== fruit);
    console.log(`You have successfully removed ${fruit}`);
  });
}
const cmdManager = new FruitCmdManager();
cmdManager.execute(new addFruitCommand("Avacado"));
cmdManager.execute(new addFruitCommand("Berry"));
cmdManager.execute(new removeFruitCommand("Berry"));
// pros
// 1. decouples methods from objects that execute operation
// cons
// 1. usecases are limited
// 2. unnecessary boilerplate added
