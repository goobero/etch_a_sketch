const defaultSize = 16;
const gridContainer =  document.getElementById('grid-container');

function makeGrid(size) {
    gridContainer.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'pink';
        });
        gridContainer.appendChild(gridSquare);
    }
};


/*function newSize(size) {
    let num = prompt("Please enter the number of squares per side you want for the grid.")
    let newSize = parseInt(num);
    if (newSize < 100) {
        setGrid(size);
    } else {
        alert("Sorry, please choose a number smaller than 100");
    }
};
*/

makeGrid(defaultSize);