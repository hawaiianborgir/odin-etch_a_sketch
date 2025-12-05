const container = document.querySelector(".container");
container.style.width = `800px`;
container.style.height = `800px`;
container.style.display = "flex";
container.style.flexWrap = "wrap";

function pixelCreation(size) {
    for (i = 1; i <= size*size ; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel"
        pixel.style.border = "1px solid #ccc"
        pixel.style.width = `${800/size}px`
        pixel.style.height = `${800/size}px`
        container.appendChild(pixel);
    }
}

function hoverEffect() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            item.style.backgroundColor = `black`;
        })
    });
}