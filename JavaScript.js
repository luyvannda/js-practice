const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This a new div added using JavaScript";
container.appendChild(content);

const redPara = document.createElement("p");
redPara.style.color = 'red';
redPara.textContent = "Hey I'm red!";
container.appendChild(redPara);

const blueHeading = document.createElement("h3");
blueHeading.style.color = 'blue';
blueHeading.textContent = "I'm a blue h3!";
container.appendChild(blueHeading);

const divPink = document.createElement("div");
divPink.style.backgroundColor = "pink";
divPink.style.border = "1px, solid, black";

const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";
divPink.appendChild(divHeading);


const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";
divPink.appendChild(divPara);


container.appendChild(divPink);