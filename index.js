let gridSize = Number(prompt("Enter the grid size:"));
console.log(gridSize);
console.log(typeof gridSize);

const container = document.querySelector(".container");
console.log(container);

const boxWidth = 400 / gridSize;

for (let i = 0; i < gridSize * gridSize; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.width = `${boxWidth}px`;
  container.appendChild(box);
}
