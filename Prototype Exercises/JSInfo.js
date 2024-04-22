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
