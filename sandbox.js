// create a div container and append it to the body
const documentBody = document.querySelector('body');
let container = document.createElement('div');
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
const randomColorButton = document.getElementById('randomColorButton');
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

function randomNumber(num){
    return Math.floor(Math.random() * num);
}

randomColorButton.addEventListener('click', () =>{
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
            grid.setAttribute('style', `background-color: rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}`);
        });
    });
});



var frequency = .3;
function rgbRandom(){
    for (d = 0; d < 32; d++){
       red   = Math.sin(frequency*d + 0) * 127 + 128;
       green = Math.sin(frequency*d + 2) * 127 + 128;
       blue  = Math.sin(frequency*d + 4) * 127 + 128;
       colours = `${red},  ${green}, ${blue}`;
       console.log(d);
       return colours;
    //    document.write( '<font color="' + RGB2Color(red,green,blue) + '">&#9608;</font>');
    }
}

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


// rainbowButton.addEventListener('click', () =>{
//     let x = gridInput.value;
//     documentBody.removeChild(container);
//     container = document.createElement('div');
//     container.setAttribute('id', 'main-body');
//     documentBody.appendChild(container);
//     container.setAttribute('style', `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr)`);
//     let j = 0;
//     for (j = 0; j < x*x; j++){
//         if (x > 100) {
//             return alert('Whoa! That\'s too big and resources will kaput. Enter a number < 100 =]');
//             break;    
//         };
//         let newGrid = document.createElement('div');
//         newGrid.setAttribute('class', 'grids');
//         container.appendChild(newGrid);
//     };
//     let newGridBody = document.getElementsByClassName('grids');
//     let newGrids = Array.from(newGridBody);
//     newGrids.forEach(grid =>{
//         grid.addEventListener('mouseover', () =>{
//             grid.removeAttribute('class');
//             grid.setAttribute('style', `background-color: rgb(${rgbRandom()})`);
//         });
//     });
// });



// function rgbRandom(){
//     for( l=0; l < 1<<24; l++) {
//         r = (l>>16) & 0xff;
//         g = (l>>8) & 0xff;
//         b = l & 0xff;
//         colour = "rgb("+r+","+g+","+b+")";
//     };
//     return colour;
// };     


// rainbow loop
// var red, green, blue;
// for (red = 0; red <= 255; red++){
//     for (green = 0; green <= 255; green++){
//         for (blue = 0; blue <= 255; blue++){
//             //rgb(red, green blue)
//         }
//     }
// }
// for( l=0; l < 1<<24; l++) {
//     r = (l>>16) & 0xff;
//     g = (l>>8) & 0xff;
//     b = l & 0xff;
//     colour = "rgb("+r+","+g+","+b+")";
// };       
