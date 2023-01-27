const defaultSize = 16;
const gridContainer =  document.getElementById('grid-container');
const rainbowButton = document.getElementById('rainbow-button');

let nowSize = defaultSize;
let rainbowMode = false;

rainbowButton.onclick = () => rainbowMode = true;

function makeGrid(size) {
    gridContainer.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', changeColour);
        gridContainer.appendChild(gridSquare);
    }
};

function changeColour(event) {
    if (rainbowMode === true) {
        getRandomColour(event);
    }
    else {
        event.target.style.backgroundColor = 'pink';
    }
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

function resetGrid() {
    gridContainer.innerHTML=''
    makeGrid(defaultSize);
    rainbowMode = false;
}

function getRandomColour(event) {
    const choices = "0123456789ABCDEF".split('');
    let randomColour = "#";
    for (let i = 0; i < 6; i++) {
        randomColour+= choices[Math.floor(Math.random() * choices.length)];
    }
    event.target.style.backgroundColor = randomColour;
}


makeGrid(defaultSize);