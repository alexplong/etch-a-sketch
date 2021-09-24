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

// Listening event for the container
container.addEventListener('mouseover', (e) => {
    if (e.target.className === 'grids'){
        e.target.setAttribute('class', 'hovering');
    } else {
        // do nothing
    }
});

// Reset button to reset the grid back to original color and to ask user for new input for new grid size
const resetButton = document.getElementById('resetButton');
const rainbowButton = document.getElementById('rainbowButton');

// Update to slider button and display current value
const slider = document.getElementById('mySlider');
const output = document.getElementById('demo');
output.innerHTML = slider.value;

// Update current slider value each time you drag the slider
slider.oninput = function() {
    output.innerHTML = this.value;
    console.log(this.value);
};


// // Updated reset button
// resetButton.addEventListener('click', () =>{
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
//     container.addEventListener('mouseover', (e) => {
//         if (e.target.className === 'grids'){
//             e.target.setAttribute('class', 'hovering');
//         } else {
//             // do nothing
//         }
//     })
// });

// Update to use slider input
resetButton.addEventListener('click', () =>{
    let x = mySlider.value;
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
    container.addEventListener('mouseover', (e) => {
        if (e.target.className === 'grids'){
            e.target.setAttribute('class', 'hovering');
        } else {
            // do nothing
        }
    })
});


// Updated rainbow function
// let d = 1; 
// function rgbRandom(){
//     while (d != 0){
//         let frequency = .3;
//         red   = Math.sin(frequency*d + 0) * 127 + 128;
//         green = Math.sin(frequency*d + 2) * 127 + 128;
//         blue  = Math.sin(frequency*d + 4) * 127 + 128;
//         colours = `${red},  ${green}, ${blue}`;
//         d++;
//         return colours;
//     } 
// };
// rainbowButton.addEventListener('click', () =>{
//         let x = gridInput.value;
//         documentBody.removeChild(container);
//         container = document.createElement('div');
//         container.setAttribute('id', 'main-body');
//         documentBody.appendChild(container);
//         container.setAttribute('style', `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr)`);
//         let j = 0;
//         for (j = 0; j < x*x; j++){
//             if (x > 100) {
//                 return alert('Whoa! That\'s too big and resources will kaput. Enter a number < 100 =]');
//                 break;    
//             };
//             let newGrid = document.createElement('div');
//             newGrid.setAttribute('class', 'grids');
//             container.appendChild(newGrid);
//         };
//         container.addEventListener('mouseover', (e) => {
//             if (e.target.className === 'grids') {
//                 // do this
//                 e.target.setAttribute('style', `background-color: rgb(${rgbRandom()})`);
//             } else {
//                 // do nothing
//             }
//         })
//     }
// );

// Updated rainbow slider
let d = 1; 
function rgbRandom(){
    while (d != 0){
        let frequency = .3;
        red   = Math.sin(frequency*d + 0) * 127 + 128;
        green = Math.sin(frequency*d + 2) * 127 + 128;
        blue  = Math.sin(frequency*d + 4) * 127 + 128;
        colours = `${red},  ${green}, ${blue}`;
        d++;
        return colours;
    } 
};
rainbowButton.addEventListener('click', () =>{
        let x = mySlider.value;
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
        container.addEventListener('mouseover', (e) => {
            if (e.target.className === 'grids') {
                // do this
                e.target.setAttribute('style', `background-color: rgb(${rgbRandom()})`);
            } else {
                // do nothing
            }
        })
    }
);
    