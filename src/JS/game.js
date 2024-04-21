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

/* This is to practice prototypal inheritance from the odin project

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
*/

// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};

// Initialize Warrior constructor

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.cast = function () {
  return `${this.name} casts ${this.spell}.`;
};

// Initialize individual character instances
const hero1 = new Warrior("Joe", 1, "sword");
const hero2 = new Healer("Kanin", 1, "cure");

console.log(hero1);
console.log(hero2);

let hero1Proto = Object.getPrototypeOf(hero1);
let hero2Proto = Object.getPrototypeOf(hero2);

console.log(hero1Proto);
console.log(hero2Proto);

console.log(hero1.attack());
console.log(hero2.cast());

/*Prototype properties and methods are not automatically linked when we use call() to chain constructors. We will use Object.setPropertyOf() to link the properties in the Hero constructor to the Warrior and Healer constructors, making sure to put it before any additional methods. */

console.log(hero1.greet());
console.log(hero2.greet());
