"use strict";

// Variables
const container = document.querySelector(".container");

let squares = 32;

// Creating divs inside the container box
function createSquares(squares) {
  for (let i = 0; i < squares * squares; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${700 / squares}px`;
    div.style.height = `${700 / squares}px`;
    console.log(div.style.width, div.style.height);
    container.append(div);
    // console.log(container.childNodes);
  }
}

createSquares(squares);
