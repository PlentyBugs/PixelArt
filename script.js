let canvas = document.getElementById("canvas");
let palette = document.getElementById("palette");
let width = 100;
let height = 60;
let color = "white";
let mousedown = false;

let buildCanvas = () => {
    for (let i = 0; i < height; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < width; j++) {
            let element = document.createElement("div");
            element.className += " canvasPartUncolored";
            element.addEventListener("mouseover", () => {
                if (mousedown) {
                    element.style.border = "1px solid " + color;
                    element.style.background = color;
                }
            });
            row.appendChild(element);
        }
        canvas.appendChild(row);
    }
};

let buildPalette = () => {
    let paletteColors = ["white", "red", "brown", "green", "blue", "coral", "darkred", "bisque", "cyan", "aquamarine", "darkgreen", "hotpink", "indigo", "blueviolet", "purple", "pink", "plum", "yellow", "yellowgreen", "tomato", "sienna", "skyblue", "grey", "khaki", "dodgerblue", "fuchsia", "gold", "goldenrod", "azure", "black", "orange"];
    let row = document.createElement("div");
    for (let col of paletteColors) {
        let part = document.createElement("div");
        part.className += " colorPalette";
        part.style.background = col;
        part.addEventListener("click", () => {document.body.style.background = col; color = col;});
        row.appendChild(part);
    }
    palette.appendChild(row);
};

buildCanvas();
buildPalette();
window.onmousedown = () => mousedown = true;
window.onmouseup = () => mousedown = false;