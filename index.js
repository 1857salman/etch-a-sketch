let gridSize = Number(prompt("Enter the grid size:"));
console.log(gridSize);
console.log(typeof gridSize);

const container = document.querySelector(".container");

const boxWidth = 400 / gridSize;

for (let i = 0; i < gridSize * gridSize; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.width = `${boxWidth}px`;
  container.appendChild(box);
}

// code for pixelated trail that is etching!
// Event delegation to access the grid elements or boxes inside the container div

container.addEventListener("mouseover", (event) => {
  const item = event.target.closest(".box");
  if (!item) return; // Exit if the cursor isn't over a grid item

  item.style.backgroundColor = "#ff0055";

  let opacity = Number(item.style.opacity);
  // console.log(typeof opacity);
  if (opacity <= 1) {
    opacity += 0.1;
    item.style.opacity = `${opacity}`;
  }
  console.log(item.style.opacity);
  console.log(typeof item.style.opacity);
});

container.addEventListener("mouseout", (event) => {
  const item = event.target.closest(".box");

  if (!item) return;

  // item.style.backgroundColor = "initial";
});
