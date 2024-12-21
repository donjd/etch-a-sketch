const sketchPad = document.querySelector("#sketch-pad");
const colors = document.querySelector(".colors");
const gridSizeInput = document.querySelector("#grid-size-input");

//setting the grid size
let gridSizeValue = 0;

gridSizeInput.addEventListener("change", (e) => {
  while (sketchPad.firstChild) {
    sketchPad.removeChild(sketchPad.lastChild);
  }

  gridSizeValue = Number(gridSizeInput.value);
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
