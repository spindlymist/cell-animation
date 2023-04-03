////////////////////////////////////////////////////////////////
// Public Interface

export function runCellAnims(selector='.animation-container', gridClass='animation-grid') {
    document.querySelectorAll(selector)
        .forEach(el => runCellAnim(el, gridClass));
}

export function runCellAnim(container, gridClass='animation-grid') {
    const grid = makeGrid(
        gridClass,
        container.dataset.gridRows ?? 10,
        container.dataset.gridCols ?? 10,
        container.dataset.animStagger ?? .1
    );

    container.append(grid);
}

////////////////////////////////////////////////////////////////
// Private

function makeGrid(className, rows, cols, stagger) {
    const grid = makeDiv(className);
    const cellCount = rows * cols;

    for(let i = 0; i < cellCount; i++) {
        const cell = makeDiv();
        const delay = (cellCount - (i + 1)) * stagger;
        cell.style.setProperty("--anim-delay", delay + "s");
        grid.append(cell);
    }

    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    return grid;
}

function makeDiv(className=undefined, innerHTML='') {
    const el = document.createElement('div');
    if(className) el.className = className;
    el.innerHTML = innerHTML;
    return el;
}
