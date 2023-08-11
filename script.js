function createGrid(gridSize) {
    const grid = document.querySelector('.grid');
    if (counter === 1) grid.innerHTML = "";
    for (let i = 1; i <= gridSize; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        grid.appendChild(gridColumn);
        for (let j = 1; j <= gridSize; j++) {
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-row');
            gridColumn.appendChild(gridRow);
        }
    }
}

function colourGrid() {
    const gridElements = document.querySelectorAll('.grid-row');
    gridElements.forEach(element => element.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'blue'));
}

function getGridSize() {
    createGrid(10);
    const input = document.querySelector('#grid-size');
    const button = document.querySelector('#grid-update');
    button.addEventListener('click', (e) => {
        counter = 1;
        createGrid(Number(input.value));
    });
}

let counter = 0;
getGridSize();
colourGrid();