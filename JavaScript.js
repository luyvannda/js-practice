const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This another div added using JavaScript";

container.appendChild(content);