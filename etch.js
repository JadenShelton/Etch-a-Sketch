const sketchPad = document.querySelector(".sketchPad");

sketchPad.addEventListener("mouseenter", (e) => {
    if(e.target.classList.contains("gridBox")) {
        e.target.style.backgroundColor = "black";
    }
});

function createGrid(size) {
    const totalBoxes = size * size;
    let calcBasis = (sketchPad.offsetWidth - 10) / size;

    for(let i = 0; i < totalBoxes; i++) {
        const newBox = document.createElement("div");
        newBox.classList.add("gridBox");
        newBox.style.flex = `0 0 ${calcBasis}px`;
        newBox.style.aspectRatio = `1 / 1`
        sketchPad.appendChild(newBox);
    }
}

createGrid(16);

function newGrid(size) {
    gridBoxes.forEach((gridBox) => {
        gridBox.remove();
    });
    createGrid(size);
}