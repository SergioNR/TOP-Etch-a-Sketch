// Global Variable declaration
let gridXAxisSize = 0;
let gridYAxisSize = 0;
// Grid creation

const createGridButton = document.querySelector('.createGridButton');

createGridButton.addEventListener('click', () => getGridSize());

const getGridSize = () => {
    gridXAxisSize = parseInt(prompt('Enter the number of squares per side for the new grid (max 100)'));
    console.log(typeof gridXAxisSize)
    gridYAxisSize = parseInt(prompt('Enter the number of squares per side for the new grid (max 100)'));
    console.log(typeof gridYAxisSize)

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
            changeBackColorToBlack();
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

const changeBackColorToBlack = (e) =>{
    const square = document.querySelectorAll('.square');
    square.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('square-bg-black');
        })
    })    
}



// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.