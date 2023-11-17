// Global Variable declaration
let gridXAxisSize = 0;
let gridYAxisSize = 0;

// Grid creation
const createGridButton = document.querySelector('.createGridButton');

createGridButton.addEventListener('click', () => {
    resetGrid()
    getGridSize()
});


const getGridSize = () => {
    gridXAxisSize = parseInt(prompt('Enter the number of squares per side for the new grid (max 100)'));
    gridYAxisSize = parseInt(prompt('Enter the number of squares per side for the new grid (max 100)'));

    if (isNaN(gridXAxisSize) === true || isNaN(gridYAxisSize) === true) {
        alert(`please dont be an idiot and enter a number`);
        // getGridSize();
    }
    else {
        
        if (gridXAxisSize > 100 || gridYAxisSize > 100) {
            alert('Please enter a number less than 100');
            // getGridSize();
        }
        else {
            createGrid(gridXAxisSize, gridYAxisSize);
        }
    }
}

const squaresContainer = document.querySelector('.squaresContainer');

const createGrid = (gridXAxisSize, gridYAxisSize) => {
    for (i = 0; i <= gridXAxisSize; i++) {
        for (j = 0; j <= gridYAxisSize; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        squaresContainer.appendChild(square);
        }
    }
}

createGrid(16, 16); // Initial grid creation //! DEBUG, REMOVE BEFORE DEPLOYMENT TO PRODUCTION
// Grid reset
const resetGridButton = document.querySelector('.resetGridButton');
resetGridButton.addEventListener('click', () => resetGrid());

const resetGrid = () => {
    const square = document.querySelectorAll('.square');
    square.forEach((square) => {
        square.remove(); // since squares are being created dynamically, they dont exist as a global DOM element so we cant attach an event listener to them - so to be able to interact with them, we need add an event listener in each function that affects the grid
    })

}

// Grid's Square color change
const changeBackgroundColorToBlackButton = document.querySelector('.bgColorBlackButton');

const changeBackgroundColorToBlack = (e) => {
    const square = document.querySelectorAll('.square');
    square.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('square');
            e.target.classList.add('square-bg-black');
            e.target.style.backgroundColor = '';
        })
    })    
}

changeBackgroundColorToBlackButton.addEventListener('click', (e) => changeBackgroundColorToBlack(e));

changeBackgroundColorToBlack(); // * Activates the functionality for the grid's square color change to black BY DEFAULT, otherwise, the event listener wont work since the squares are being created dynamically

// Grid's Square color change to random color
const changeBackgroundColorToRandomButton = document.querySelector('.bgRandomColorButton');

const changeBackgroundColorToRandom = (e) => {
    const square = document.querySelectorAll('.square');
    square.forEach((square) => {
        let bgColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`; // * Generates a random color for the background of the square
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('square');
            e.target.style.backgroundColor = bgColor;
            e.target.classList.remove('square-bg-black');

        })
    })
}

changeBackgroundColorToRandomButton.addEventListener('click', (e) => changeBackgroundColorToRandom(e));
