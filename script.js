"use strict";

// Variables
const container = document.querySelector(".container");
const btnSize = document.querySelector(".btn-size");

// let squares = 16;

// Creating divs inside the container box & hover effect
function createSquares(squares) {
  for (let i = 0; i < squares * squares; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${700 / squares}px`;
    div.style.height = `${700 / squares}px`;
    container.append(div);
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "#333";
    });
  }
}

function clearSquares() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

createSquares(16);

// Let user select box size
btnSize.addEventListener("click", function (event) {
  event.preventDefault();
  let squares = document.querySelector("input[name=csize]:checked").value;
  clearSquares();
  createSquares(squares);
});
