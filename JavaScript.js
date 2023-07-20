function alertFunction() {
  alert("Awesome, you did it!!!");
}

// const btn = document.querySelector("#btn");
// btn.onclick = alertFunction;

// btn.addEventListener('click', alertFunction);

/* btn.addEventListener('click', function (x) {
  x.target.style.background = 'blue';
  x.target.style.color = 'white';
});

*/
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});