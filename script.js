"use strict";

// Variables
const container = document.querySelector(".container");
const btnSize = document.querySelector(".btn-size");
const btnColour = document.querySelector(".btn-colour");
const btnNew = document.querySelector(".btn-new");

let squares = 16;
let colour = "black";

// Creating divs inside the container box & hover effect
function createSquares(squares) {
  for (let i = 0; i < squares * squares; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${700 / squares}px`;
    div.style.height = `${700 / squares}px`;
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

// Let user select box size
btnSize.addEventListener("click", function (event) {
  event.preventDefault();
  squares = document.querySelector("input[name=csize]:checked").value;
  clearSquares();
  createSquares(squares);
});

// Reset the canvas
btnNew.addEventListener("click", function () {
  clearSquares();
  createSquares(squares);
});

// Let user change colour
btnColour.addEventListener("click", function (event) {
  event.preventDefault();
  colour = document.querySelector("input[name=ccolour]:checked").value;
  console.log(colour);
});
