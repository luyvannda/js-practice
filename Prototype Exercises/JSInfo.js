/* Task 1: Working with prototype

let animal = {
  jumps: false,
};

let rabbit = {
  jumps: true,
};

Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.jumps);

delete rabbit.jumps;

console.log(rabbit.jumps);

delete animal.jumps;

console.log(rabbit.jumps);

*/

/* task 2: Searching algorithm

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

Object.setPrototypeOf(table, head);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(pockets, bed);

console.log(pockets.pen);
console.log(bed.glasses);

 Question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

Answer: In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe. */

/* Task 3: Where does it write?

We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {};

Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.eat);

The answer: rabbit.

That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

Property lookup and execution are two different things.

The method rabbit.eat is first found in the prototype, then executed with this=rabbit.

*/

/* Task 4: Why are both hamsters full? 
We have two hamsters: speedy and lazy inheriting from the general hamster object.When we feed one of them, the other one is also full. Why? How can we fix it?
*/

/* Solution 1:

let hamster = {
  stomach: [],
  eat(food) {
    this.stomach = [food];
  },
};

let speedy = {};
let lazy = {};

Object.setPrototypeOf(speedy, hamster);
Object.setPrototypeOf(lazy, hamster);

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach);

// This one also has it, why? fix please
console.log(lazy.stomach);

Now all works fine, because this.stomach= does not perform a lookup of stomach. The value is written directly into this object.

*/

// Solution 2: each hamster has their own stomach

let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
};
let lazy = {
  stomach: [],
};

Object.setPrototypeOf(speedy, hamster);
Object.setPrototypeOf(lazy, hamster);

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach);

// This one also has it, why? fix please
console.log(lazy.stomach);

// As a common solution, all properties that describe the state of a particular object, like stomach above, should be written into that object. That prevents such problems.
