const sketchPad = document.querySelector("#sketch-pad");
const colors = document.querySelector(".colors");
const gridSizeInput = document.querySelector("#grid-size-input");

let selectedColor = "red";

// let gridSizeValue = gridSize

function createGrid(e) {}

sketchPad.addEventListener("gridCreated", (e) => {
  for (i = 0; i < e.detail.gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (n = 0; n < e.detail.gridSize; n++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("square");

      row.appendChild(gridSquare);
    }
    sketchPad.appendChild(row);
  }
});

sketchPad.addEventListener("mousedown", () => {
  sketchPad.addEventListener("mouseover", draw);
});

sketchPad.addEventListener("mouseup", () => {
  sketchPad.removeEventListener("mouseover", draw);
});

colors.addEventListener("click", (e) => {
  selectedColor = e.target.id;
});

function draw(e) {
  e.target.setAttribute(`style`, `background-color: ${selectedColor};`);
}

function changeGridSize(gridSize) {
  const gridCreated = new CustomEvent("gridCreated", {
    detail: {
      gridSize: gridSize,
    },
  });
  sketchPad.dispatchEvent(gridCreated);
}

changeGridSize(20);
