function createGrid(gridSize) {
    const grid = document.querySelector('.grid');
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

createGrid(10);