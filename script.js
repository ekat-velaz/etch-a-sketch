let square;
let drawing = false;
const container = document.querySelector(".squareContainer");

function createDivs(squareCount) {
    let squareCountMultiplied = squareCount * squareCount;
    for (let i = 0; i < squareCountMultiplied; i++) {
       square = document.createElement("div");
        container.appendChild(square);
        square.classList.add("square");
        
        square.addEventListener('mouseover', (e) => {
            if (drawing == true) {
                e.target.style.backgroundColor = "black";
            };
        });
        square.addEventListener('mousedown', (e) => {
        drawing = true;
        e.target.style.backgroundColor = "black";
            });
        square.addEventListener('mouseup', () => {
        drawing = false;
        });
    
};
};


createDivs(30);

const range = document.querySelector("#range");


range.addEventListener("input", () => {
    squareCount = range.value;
   console.log(squareCount);
   container.replaceChildren();
   container.setAttribute("style", `grid-template-columns: repeat(${squareCount}, 1fr); grid-template-rows: repeat(${squareCount}, 1fr);`);
   createDivs(squareCount);
   
});



