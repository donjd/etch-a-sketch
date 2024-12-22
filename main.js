const sketchPad = document.querySelector("#sketch-pad");
const colors = document.querySelector(".colors");
const gridSizeInput = document.querySelector("#grid-size-input");
const resetBtn = document.querySelector("#reset-btn");

//setting the grid size
let gridSizeValue = 0;

gridSizeInput.addEventListener("change", () => {
  while (sketchPad.firstChild) {
    sketchPad.removeChild(sketchPad.lastChild);
  }

  gridSizeValue = Number(gridSizeInput.value);
  if (gridSizeValue > 16) {
    gridSizeInput.textContent = 16;
    alert("Reducing grid size to 16 x 16.");
    gridSizeValue = 16;
  }
  for (i = 0; i < gridSizeValue; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (n = 0; n < gridSizeValue; n++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("square");

      row.appendChild(gridSquare);
    }
    sketchPad.appendChild(row);
  }
});

//drawing
let selectedColor = "red";

function draw(e) {
  e.target.setAttribute(`style`, `background-color: ${selectedColor};`);
}

sketchPad.addEventListener("mousedown", () => {
  sketchPad.addEventListener("mouseover", draw);
});

sketchPad.addEventListener("mouseup", () => {
  sketchPad.removeEventListener("mouseover", draw);
});

colors.addEventListener("click", (e) => {
  selectedColor = e.target.id;
});

//resetting drawing
resetBtn.addEventListener("click", () => {
  while (sketchPad.firstChild) {
    sketchPad.removeChild(sketchPad.lastChild);
  }

  gridSizeValue = Number(gridSizeInput.value);
  if (gridSizeValue > 16) {
    gridSizeInput.textContent = 16;
    alert("Reducing grid size to 16 x 16.");
    gridSizeValue = 16;
  }
  for (i = 0; i < gridSizeValue; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (n = 0; n < gridSizeValue; n++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("square");

      row.appendChild(gridSquare);
    }
    sketchPad.appendChild(row);
  }
});
