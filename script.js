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
// console.log(width, height);
// console.log(container.style.width, container.style.height);

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

// // Let user select box size by button
// btnSize.addEventListener("click", function (event) {
//   event.preventDefault();
//   squares = document.querySelector("input[name=csize]:checked").value;
//   clearSquares();
//   createSquares(squares);
// });

// Let user select box size by radio click

for (let i = 0; i < radioSize.length; i++) {
  radioSize[i].addEventListener("click", function (event) {
    squares = event.target.value;
    clearSquares();
    createSquares(squares);
  });
}

// radioSize.forEach((item) => {
//   addEventListener("click", function (event) {
//     // event.preventDefault();
//     console.log(event);
//     squares = event.target.value;
//     clearSquares();
//     createSquares(squares);
//   });
// });

// Let user change colour by button
// btnColour.addEventListener("click", function (event) {
//   event.preventDefault();
//   colour = document.querySelector("input[name=ccolour]:checked").value;
//   console.log(colour);
// });

// Let user change colour

for (let i = 0; i < radioColour.length; i++) {
  radioColour[i].addEventListener("click", function (event) {
    colour = event.target.value;
  });
}

// radioColour.forEach((item) => {
//   addEventListener("change", function (event) {
//     event.preventDefault();
//     colour = event.target.value;
//     console.log(event);
//   });
// });

// Reset the canvas
btnNew.addEventListener("click", function () {
  clearSquares();
  createSquares(squares);
});
