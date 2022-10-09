let square;
let drawing = false;
let rainbowMode = false;
const container = document.querySelector(".squareContainer");

const range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");

const colorPicker = document.querySelector("#colorPicker");
let selectedColor = colorPicker.value;

const colorPickerBgr = document.querySelector("#colorPickerBgr");
let bgColor = colorPickerBgr.value;

//Adding buttons
const eraser = document.querySelector(".btn-erase");
const cell = document.querySelector(".btn-cell");
const noCell = document.querySelector(".btn-nocell");
const rainbow = document.querySelector(".btn-randomColor")
const clearGrid = document.querySelector(".btn-clear");

function createDivs(squareCount) {
    let squareCountMultiplied = squareCount * squareCount;
    for (let i = 0; i < squareCountMultiplied; i++) {

       //Creating grid
        square = document.createElement("div");
        container.appendChild(square);
        square.classList.add("square");
        
        //Adding to every grid child listeners to paint when mousedown and mouseover
        square.addEventListener('mouseover', (e) => {
            if (drawing == true) {
                if (rainbowMode == false) {
                e.target.style.backgroundColor = selectedColor;
            } else if (rainbowMode == true) {
                e.target.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
            };
            };
        });
        square.addEventListener('mousedown', (e) => {
        drawing = true;
        if (rainbowMode == false) {
        e.target.style.backgroundColor = selectedColor;
        } else if (rainbowMode == true) {
            e.target.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        };
            });
        square.addEventListener('mouseup', () => {
        drawing = false;
        });

        bgColor = colorPickerBgr.value;
    container.style.backgroundColor = bgColor;
};
};

createDivs(30);
rangeValue.textContent = `${range.value} x ${range.value}`;

//Range changing grid input
range.addEventListener("input", () => {
    squareCount = range.value;
   console.log(squareCount);
   container.replaceChildren();
   container.setAttribute("style", `grid-template-columns: repeat(${squareCount}, 1fr); grid-template-rows: repeat(${squareCount}, 1fr);`);
   createDivs(squareCount);
   rangeValue.textContent = `${range.value} x ${range.value}`;
});

//Changing selected color listener for color input
colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
    rainbowMode = false;
});

//Changing background color of the grid listener for color input
colorPickerBgr.addEventListener("input", () => {
    bgColor = colorPickerBgr.value;
    container.style.backgroundColor = bgColor;
});

//Eraser button listener
eraser.addEventListener('click', () => {
    selectedColor = "transparent";
    rainbowMode = false;
});

//Clear grid button listener
clearGrid.addEventListener("click", () => {
    for (const child of container.children) {
        child.style.backgroundColor = "transparent";
    };
});

 //Cell and no-cell buttons for grid
cell.addEventListener("click", () => {
    for (const child of container.children) {
        child.style.borderColor = "rgba(0, 0, 0, 0.182)";
    };
});
noCell.addEventListener("click", () => {
    for (const child of container.children) {
        child.style.borderColor = "transparent";
    };
});

// Function to get a random color for rainbow mode
function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
};

//Rainbow mode listener button 
rainbow.addEventListener("click", () => {
    if (rainbowMode == false) {
        rainbowMode = true;
    } else if (rainbowMode == true) {
        rainbowMode = false;
    };
  } );