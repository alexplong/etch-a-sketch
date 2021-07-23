// create a div container and append it to the body
const documentBody = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('id', 'main-body');
documentBody.appendChild(container);

// create a 16x16 grid of square divs

// while loop edition
let i = 0;
// while (i < 16) {
//     let newGrid = document.createElement('div');
//     newGrid.setAttribute('class', 'grids');
//     container.appendChild(newGrid);
//     i++;
// }


// for loop edition
for (i = 0; i < 16*16; i++){
    let newGrid = document.createElement('div');
    newGrid.setAttribute('class', 'grids');
    container.appendChild(newGrid);
}


// Reset button to reset the grid back to original color and to ask user for new input for new grid size
const resetButton = document.getElementById('resetButton');
const gridInput = document.getElementById('gridInput');

resetButton.addEventListener('click', () =>{
    let x = gridInput.value;
    grids.forEach(grid =>{
        container.removeChild(grid);
        // need to change grid
        container.setAttribute('style', `grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr)`)
    })
    for (i = 0; i < x*x; i++){
        let newGrid = document.createElement('div');
        newGrid.setAttribute('class', 'grids');
        container.appendChild(newGrid);
    };
    
    grids.forEach(grid =>{
        grid.setAttribute('class', 'grids');
    });
    let grids = Array.from(gridBody);
});


// How to set styles with JavaScript but it gets too long so prefer to set ID and CLASSES and have styles set in styles.CSS
// container.setAttribute('style', 'display: grid; grid-template-columns: 4; grid-template-rows: 4');

// const gridBody = document.querySelectorAll('div' > 'grids'); // one way of doing it
const gridBody = document.getElementsByClassName('grids'); 
let grids = Array.from(gridBody); // HTML list unable to iterate so need to convert to Array
grids.forEach(grid =>{
    grid.addEventListener('mouseover', () =>{
    grid.setAttribute('class', 'hovering')
    });
});
 