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
