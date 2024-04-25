// Examples of "this" in JavaScript

const calc = {
  num: 0,
  increment() {
    this.num += 1;
    return console.log(this.num);
  },
};

calc.increment();
calc.increment();

// Starting ECMAScript 2015, JavaScript allows to define constructors using class:
class City {
  constructor(name, traveled) {
    this.name = name;
    this.traveled = false;
  }

  travel() {
    this.traveled = true;
  }
}
const paris = new City("Paris", false);

paris.travel();

console.log(paris.traveled);

class Vehicle {
  constructor(type, wheelsCount) {
    if (!(this instanceof Vehicle)) {
      throw Error("Error: Incorrect invocation");
    }

    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
  }
}

// Constructor invocation
const car = new Vehicle("car", 4);
console.log(car.type);
console.log(car.wheelsCount);
console.log(car instanceof Vehicle);

// Function invocation. Throws an error.
// const brokenCar = Vehicle("Broken Car", 3);

// Indirect Invocation: this with call and apply
const rabbit = { name: "White Rabbit" };

function concatName(string) {
  console.log(this === rabbit);
  return string + this.name;
}

console.log(concatName.call(rabbit, "Hello "));
console.log(concatName.apply(rabbit, ["Bye "]));
