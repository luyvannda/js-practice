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
