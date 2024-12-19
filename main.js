const sketchPad = document.querySelector("#sketch-pad");

const row = document.createElement("div");
const gridSquare = document.createElement("div");

sketchPad.setAttribute("style", "display: flex; flex-direction: column;");
row.setAttribute("style", "display: flex;");

gridSquare.setAttribute(
  "style",
  "width: 100px; height: 100px; background-color: green;"
);

function addGridSquare() {
  row.appendChild(gridSquare);
  sketchPad.appendChild(row);
}

for (i = 0; i < 5; i++) {
  addGridSquare();
}
