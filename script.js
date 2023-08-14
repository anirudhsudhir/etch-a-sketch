function createGrid(gridSize) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";
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
    if (colorChoice === 'white') colorChoice = '#0000FF';
    colourGrid();
    resetGrid();
}

function colourGrid() {
    const gridElements = document.querySelectorAll(".grid-row");
    const colorSelect = document.querySelector("#color-input");
    colorSelect.addEventListener("input", (e) => {
        colorChoice = e.target.value;
        randomColourActive = 0;
    });
    const random = document.querySelector('#random');
    random.addEventListener('click', () => randomColourActive = 1);
    const eraser = document.querySelector("#eraser");
    eraser.addEventListener("click", () => {
        colorChoice = 'white';
        randomColourActive = 0;
    });
    gridElements.forEach((element) =>
        element.addEventListener(
            "mouseenter",
            (e) => {
                if (randomColourActive === 1)
                    colorChoice = getRandomColour();
                e.target.style.backgroundColor = `${colorChoice}`;
            }
        )
    );
}

function resetGrid() {
    const button = document.querySelector('#clear-grid');
    button.addEventListener('click', () => createGrid(gridSize));
}

function getGridSize() {
    createGrid(20);
    const input = document.querySelector("#grid-size");
    const button = document.querySelector("#grid-update");
    const container = document.querySelector(".gridsize-input");
    const message = document.createElement('div');
    message.textContent = 'Value entered exceeds given range!';
    button.addEventListener("click", (e) => {
        if (input.value >= 1 && input.value <= 100) {
            if (warning === 1) {
                container.removeChild(message);
                warning = 0;
            }
            gridSize = Number(input.value);
            createGrid(gridSize);
        }
        else {
            if (warning === 0) {
                container.appendChild(message);
                warning = 1;
            }
        }
    });
}

function getRandomColour() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let randomColour = '';
    for (let i = 1; i <= 6; i++) {
        randomColour = String(arr[Math.floor(Math.random() * arr.length)]) + randomColour;
    }
    randomColour = '#' + randomColour;
    return randomColour;
}

let colorChoice = "#0000FF";
let gridSize = 20;
let warning = 0;
let randomColourActive = 0;
getGridSize();
getRandomColour();