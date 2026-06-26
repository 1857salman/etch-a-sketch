// Set  the sketch pad width here: in px units
const SKETCH_WIDTH = 500;

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

// sets conatiner height and width: sketch-pad size in px
container.style.width = `${SKETCH_WIDTH}px`;
container.style.height = `${SKETCH_WIDTH}px`;

button.addEventListener("click", setPad);

function setPad() {
  const gridSize = Number(prompt("Enter the grid size:"));
  // sets the size of each grid box/cell
  const boxWidth = SKETCH_WIDTH / gridSize;

  removeGrid();
  setGrid(gridSize, boxWidth);

  console.log(SKETCH_WIDTH);
}
//adapted from MDN
function removeGrid() {
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function setGrid(gridSize, boxWidth) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxWidth}px`;
    container.appendChild(box);
  }
}

// code for pixelated trail that is etching!
// Event delegation to access the grid elements or boxes inside the container div

container.addEventListener("mouseover", (event) => {
  const item = event.target.closest(".box");
  if (!item) return; // Exit if the cursor isn't over a grid item

  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;

  item.style.backgroundColor = rndCol;

  let opacity = item.style.opacity ? Number(item.style.opacity) : 0.5;

  if (opacity < 1) {
    opacity += 0.05;
    item.style.opacity = `${opacity}`;
  }
});

container.addEventListener("mouseout", (event) => {
  const item = event.target.closest(".box");
  if (!item) return;
});

// Followin random color code is adapted from MDN
// event object reading
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
// This function is not being used directly.
function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}
