const gridContainer =  document.getElementsByClassName('grid-container');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.className = 'grid-square';
    gridContainer[0].appendChild(div);
}

const gridSquare = document.getElementsByClassName('grid-square');
const gridSquareArr = Array.from(gridSquare);

gridSquareArr.forEach((gridSquareArr) => {
    gridSquareArr.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });
});

const button = document.createElement('button');
button.textContent = "hello";
document.body.appendChild('button');