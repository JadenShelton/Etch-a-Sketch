const sketchPad = document.querySelector(".sketchPad");

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

const gridBoxes = document.querySelectorAll(".gridBox");

gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = 'black';
    });
});

function newGrid(size) {
    gridBoxes.forEach((gridBox) => {
        gridBox.remove();
    });
    createGrid(size);
}