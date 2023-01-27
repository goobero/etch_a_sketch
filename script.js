const defaultSize = 16;
const gridContainer =  document.getElementById('grid-container');
let nowSize = defaultSize;

function makeGrid(size) {
    gridContainer.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mousedown', changeColour);
        gridSquare.addEventListener('mouseover', changeColour);
        gridContainer.appendChild(gridSquare);
    }
};

function changeColour(event) {
    event.target.style.backgroundColor = 'pink';
};

function resizeGrid(newSize) {
    let num = prompt("Please enter a number specifying the number of rows/columns you want the grid to have.");
    if (!num) {
        return;
    } else if (isNaN(num)) {
        alert("Please enter a number");
    }
    else {
        let newSize = parseInt(num);
        if (newSize <= 100) {
            gridContainer.innerHTML = '';
            makeGrid(newSize);
        }
        else {
            alert("Please write a number smaller than 100");
        }
    }
}

makeGrid(defaultSize);