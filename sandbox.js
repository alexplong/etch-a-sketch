// create a div container and append it to the body
const documentBody = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('id', 'main-body');
documentBody.appendChild(container);

// create a default 16x16 grid of square divs

// while loop edition
let i = 0;
// while (i < 16) {
//     let newGrid = document.createElement('div');
//     newGrid.setAttribute('class', 'grids');
//     container.appendChild(newGrid);
//     i++;
// }
// for loop version of above
for (i = 0; i < 16*16; i++){
    let newGrid = document.createElement('div');
    newGrid.setAttribute('class', 'grids');
    container.appendChild(newGrid);
};

// const gridBody = document.querySelectorAll('div' > 'grids'); // one way of doing it
const gridBody = document.getElementsByClassName('grids'); 
let grids = Array.from(gridBody); // HTML list unable to iterate so need to convert to Array
grids.forEach(grid =>{
    grid.addEventListener('mouseover', () =>{
        grid.setAttribute('class', 'hovering')
    });
});
 


// Reset button to reset the grid back to original color and to ask user for new input for new grid size
const resetButton = document.getElementById('resetButton');
const gridInput = document.getElementById('gridInput');

resetButton.addEventListener('click', () =>{
    let x = gridInput.value;
    documentBody.removeChild(container);
    newContainer = document.createElement('div');
    newContainer.setAttribute('id', 'main-body');
    documentBody.appendChild(newContainer);
    newContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr)`);
    let j = 0;
    for (j = 0; j < x*x; j++){
        let newGrid = document.createElement('div');
        newGrid.setAttribute('class', 'grids');
        newContainer.appendChild(newGrid);
    };
    let newGridBody = document.getElementsByClassName('grids');
    let newGrids = Array.from(newGridBody);
    newGrids.forEach(grid =>{
        grid.addEventListener('mouseover', () =>{
            grid.setAttribute('class', 'hovering')
        });
    });
});
