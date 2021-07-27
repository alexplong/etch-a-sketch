// create a div container and append it to the body
const documentBody = document.querySelector('body');
let container = document.createElement('div');
container.setAttribute('id', 'main-body');
documentBody.appendChild(container);

// create default 16x16 grid of divs
let i = 0;
for (i = 0; i < 16*16; i++){
    let newGrid = document.createElement('div');
    newGrid.setAttribute('class', 'grids');
    container.appendChild(newGrid);
};

const gridBody = document.getElementsByClassName('grids'); 
let grids = Array.from(gridBody); // HTML list unable to iterate so need to convert to Array
grids.forEach(grid =>{
    grid.addEventListener('mouseover', () =>{
        grid.setAttribute('class', 'hovering')
    });
});
 
// Reset button to reset the grid back to original color and to ask user for new input for new grid size
const resetButton = document.getElementById('resetButton');
const rainbowButton = document.getElementById('rainbowButton');
const gridInput = document.getElementById('gridInput');

resetButton.addEventListener('click', () =>{
    let x = gridInput.value;
    documentBody.removeChild(container);
    container = document.createElement('div');
    container.setAttribute('id', 'main-body');
    documentBody.appendChild(container);
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr)`);
    let j = 0;
    for (j = 0; j < x*x; j++){
        if (x > 100) {
            return alert('Whoa! That\'s too big and resources will kaput. Enter a number < 100 =]');
            break;    
        };
        let newGrid = document.createElement('div');
        newGrid.setAttribute('class', 'grids');
        container.appendChild(newGrid);
    };
    let newGridBody = document.getElementsByClassName('grids');
    let newGrids = Array.from(newGridBody);
    newGrids.forEach(grid =>{
        grid.addEventListener('mouseover', () =>{
            grid.setAttribute('class', 'hovering')
        });
    });
});


// rainbow function loop
let d = 1; 
function rgbRandom(){
    while (d != 0){
        let frequency = .3;
        red   = Math.sin(frequency*d + 0) * 127 + 128;
        green = Math.sin(frequency*d + 2) * 127 + 128;
        blue  = Math.sin(frequency*d + 4) * 127 + 128;
        colours = `${red},  ${green}, ${blue}`;
        console.log(d);
        console.log(colours);
        d++;
        return colours;
    } 
};
rainbowButton.addEventListener('click', () =>{
        let x = gridInput.value;
        documentBody.removeChild(container);
        container = document.createElement('div');
        container.setAttribute('id', 'main-body');
        documentBody.appendChild(container);
        container.setAttribute('style', `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr)`);
        let j = 0;
        for (j = 0; j < x*x; j++){
            if (x > 100) {
                return alert('Whoa! That\'s too big and resources will kaput. Enter a number < 100 =]');
                break;    
            };
            let newGrid = document.createElement('div');
            newGrid.setAttribute('class', 'grids');
            container.appendChild(newGrid);
        };
        let newGridBody = document.getElementsByClassName('grids');
        let newGrids = Array.from(newGridBody);
        newGrids.forEach(grid =>{
            grid.addEventListener('mouseover', () =>{
                grid.removeAttribute('class');
                grid.setAttribute('style', `background-color: rgb(${rgbRandom()})`);
            })
        })
    }
);
