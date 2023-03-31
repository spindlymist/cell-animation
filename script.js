const animationContainers = [...document.querySelectorAll('.animation-container')];
animationContainers.forEach(initContainer);

////////////////////////////////////////////////////////////////

function initContainer(container) {
    const grid = makeGrid(
        container.dataset.gridRows ?? 10,
        container.dataset.gridCols ?? 10,
        container.dataset.animStagger ?? .1
    );
    grid.style.backgroundColor = "transparent";

    container.append(grid);
}

function makeGrid(rows, cols, stagger) {
    const grid = makeDiv('animation-grid');

    const cellCount = rows * cols;

    for(let i = 0; i < rows * cols; i++) {
        const cell = makeDiv();
        cell.style.setProperty("--anim-delay", (cellCount - (i + 1)) * stagger + "s");
        grid.append(cell);
    }

    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    return grid;
}

////////////////////////////////////////////////////////////////
// Utility

function makeElement(tagName, className=undefined, innerHTML='') {
    const el = document.createElement(tagName);
    if(className) el.className = className;
    el.innerHTML = innerHTML;
    return el;
}

function makeDiv(className=undefined, innerHTML='') {
    return makeElement('div', className, innerHTML);
}
