function createGrid(gridSize) {
    const grid = document.querySelector(".grid");
    if (counter === 1) grid.innerHTML = "";
    for (let i = 1; i <= gridSize; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        grid.appendChild(gridColumn);
        for (let j = 1; j <= gridSize; j++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid-row");
            gridColumn.appendChild(gridRow);
        }
    }
    colourGrid();
}

function colourGrid() {
    const gridElements = document.querySelectorAll(".grid-row");
    const colorSelect = document.querySelector("#color-input");
    colorSelect.addEventListener("input", (e) => (colorChoice = e.target.value));
    const colorButton = document.querySelectorAll(".color-button");
    colorButton.forEach((input) =>
        input.addEventListener(
            "input",
            (e) => colorChoice = e.target.getAttribute("id")
        )
    );
    gridElements.forEach((element) =>
        element.addEventListener(
            "mouseenter",
            (e) => e.target.style.backgroundColor = `${colorChoice}`
        )
    );
}

function getGridSize() {
    createGrid(10);
    const input = document.querySelector("#grid-size");
    const button = document.querySelector("#grid-update");
    button.addEventListener("click", (e) => {
        counter = 1;
        createGrid(Number(input.value));
    });
}

let counter = 0;
let colorChoice = "black";
getGridSize();