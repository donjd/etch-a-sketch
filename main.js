const sketchPad = document.querySelector("#sketch-pad");
sketchPad.setAttribute(
  "style",
  "display: flex; flex-direction: column; gap: 10px;"
);

function createGrid(e) {}

sketchPad.addEventListener("gridCreated", (e) => {
  for (i = 0; i < e.detail.gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("style", "display: flex; gap: 10px;");
    for (n = 0; n < e.detail.gridSize; n++) {
      const gridSquare = document.createElement("div");
      gridSquare.setAttribute(
        "style",
        "width: 100px; height: 100px; background-color: green;"
      );
      row.appendChild(gridSquare);
    }
    sketchPad.appendChild(row);
  }
});

function changeGridSize(gridSize) {
  const gridCreated = new CustomEvent("gridCreated", {
    detail: {
      gridSize: gridSize,
    },
  });
  sketchPad.dispatchEvent(gridCreated);
}

changeGridSize(2);
