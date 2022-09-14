"use strict";

// Variables
const container = document.querySelector(".container");
const radioSize = document.querySelectorAll("input[name=csize]");
const radioColour = document.querySelectorAll("input[name='ccolour']");
const btnNew = document.querySelector(".new-canvas");

const width = container.offsetWidth - 2;
const height = width;
container.style.width = `${width}px`;
container.style.height = `${height}px`;

let squares = 16;
let colour = document.querySelector("input[name=ccolour]:checked").value;

// Creating divs inside the container box & hover effect
function createSquares(squares) {
  for (let i = 0; i < squares * squares; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${width / squares}px`;
    div.style.height = `${height / squares}px`;
    container.append(div);
    div.addEventListener("click", function () {
      div.style.backgroundColor = colour;
    });
  }
}

function clearSquares() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

createSquares(squares);

// Let user select box size by radio click

for (let i = 0; i < radioSize.length; i++) {
  radioSize[i].addEventListener("click", function (event) {
    squares = event.target.value;
    clearSquares();
    createSquares(squares);
  });
}

// Let user change colour

for (let i = 0; i < radioColour.length; i++) {
  radioColour[i].addEventListener("click", function (event) {
    colour = event.target.value;
  });
}

// Reset the canvas
btnNew.addEventListener("click", function () {
  clearSquares();
  createSquares(squares);
});
