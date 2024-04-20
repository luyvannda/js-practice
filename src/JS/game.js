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
