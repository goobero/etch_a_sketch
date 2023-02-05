const defaultSize = 16;
const gridContainer =  document.getElementById('grid-container');
const rainbowButton = document.getElementById('rainbow-button');
const colourPicker = document.getElementById('colourpicker');
const gradientButton = document.getElementById('gradient-button');
const eraserButton = document.getElementById('eraser');
const buttons = document.querySelectorAll('button');

let currentSize = defaultSize;
let mouseDown = false;
let rainbowMode = false;
let colourPickerMode = true;
let gradientMode = false;
let eraserMode = false;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

eraserButton.onclick = () => {
    rainbowMode = false;
    colourPickerMode = false;
    gradientMode = false;
    eraserMode = true;
}

rainbowButton.onclick = () => {
    eraserMode = false;
    colourPickerMode = false;
    gradientMode = false;
    rainbowMode = true;
}

colourPicker.onclick = () => {
    eraserMode = false;
    rainbowMode = false;
    gradientMode = false;
    colourPickerMode = true;
}

gradientButton.onclick = () => {
    rainbowMode = false;
    colourPickerMode = false;
    eraserMode = false;
    gradientMode = true;
}

function makeGrid(size) {
    gridContainer.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', changeColour);
        gridSquare.addEventListener('mousedown', changeColour);
        gridContainer.appendChild(gridSquare);
    }
}

function changeColour(event) {
    if (event.type === "mouseover" && mouseDown === false) {
        return;
    }
        if (rainbowMode === true) {
            getRandomColour(event);

        } else if (colourPickerMode === true) {
            getPickedColour(event);

       } else if (gradientMode === true) {
            getGradientColour(event);

       } else if (eraserMode === true) {
            event.target.style.backgroundColor = 'white';
       }
}

function getPickedColour(event) {
    let pickedColour = document.getElementById('colourpicker').value;
    event.target.style.backgroundColor = pickedColour;
}

function getRandomColour(event) {
    const choices = "0123456789ABCDEF".split('');
    let randomColour = "#";
    for (let i = 0; i < 6; i++) {
        randomColour+= choices[Math.floor(Math.random() * choices.length)];
    }
    event.target.style.backgroundColor = randomColour;
}

function getGradientColour(event) {
    let currentOpacity = Number(event.target.style.backgroundColor.slice(-4,-1));
    let currentRgb = event.target.style.backgroundColor;
    if (currentOpacity <= 0.9) {
        event.target.style = `background-color: rgba(0, 0, 0, ${currentOpacity + 0.1})`;
    } else if (currentRgb !== "rgb(0, 0, 0)") {
       event.target.style = `background-color: rgba(0, 0, 0, 0.1)`;
    }
}

function resizeGrid(newSize) {
    let num = prompt("Please enter a number specifying the number of rows/columns you want the grid to have.");
    if (!num) {
        return;

    } else if (isNaN(num)) {
        alert("Please enter a number");

    } else if (num <= 100) {
        newSize = parseInt(num);
        gridContainer.innerHTML = '';
        setSize(newSize);
        makeGrid(newSize);

    } else {
        alert("Please write a number smaller than 100");
    } 
}

function setSize(newSize) {
    currentSize = newSize;
}

function resetGrid() {
    gridContainer.innerHTML=''
    makeGrid(currentSize);
}

buttons.forEach(buttons => {
    buttons.addEventListener('click', changeButtonColour);
});

function changeButtonColour(event) {
    buttons.forEach(buttons => {
        buttons.classList.remove('highlight');
        event.target.classList.add('highlight');
    });
}

makeGrid(defaultSize);