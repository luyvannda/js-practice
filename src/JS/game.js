/* example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";
*/

/* example two
const playerOne = {
  name: "Joe",
  marker: "X",
};

const playerTwo = {
  name: "Raksmey",
  marker: "O",
};
*/

/* Learned about Prototype 

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("Joe", "X");
const player2 = new Player("Raksmey", "O");

player1.sayName();
player2.sayName();

let check1 = Object.getPrototypeOf(player1) === Player.prototype;
let check2 = Object.getPrototypeOf(player2) === Player.prototype;

console.log(check1);
console.log(check2);

Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};

player1.sayHello();
player2.sayHello();

Object.getPrototypeOf(Player.prototype) === Object.prototype;
console.log(player1.valueOf());

console.log(player1.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));

*/

// This is to practice prototypal inheritance

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);

Object.getPrototypeOf(Player.prototype);

const player1 = new Player("Joe", "X");
const player2 = new Player("Raksmey", "O");

player1.sayName();
player2.sayName();
player1.getMarker();
player2.getMarker();
