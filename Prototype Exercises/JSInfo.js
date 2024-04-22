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

// task 2: Searching algorithm

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

/* Question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

Answer: In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe. */
