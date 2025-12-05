const container = document.querySelector(".container");
container.style.width = `700px`;
container.style.height = `700px`;
container.style.display = "flex";
container.style.flexWrap = "wrap";

function pixelCreation(size) {
    for (i = 1; i <= size*size ; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel"
        pixel.style.border = "1px solid #ccc"
        pixel.style.width = `${700/size}px`
        pixel.style.height = `${700/size}px`
        container.appendChild(pixel);
    }
}

function color(max = 256) {
    return Math.floor(Math.random()*max);
};

function hoverEffect() {
    const pixels = document.querySelectorAll(".pixel");
    const increment = 0.1;
    pixels.forEach((item) => {
        item.addEventListener("mouseover", (e) => {

            //color options
            // item.style.backgroundColor = `black`;
            item.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;

            //opacity increment
            if (item.style.opacity == "") {
                item.style.opacity = `${increment}`;
            } else if (Number.isFinite(parseFloat(item.style.opacity))) {
                item.style.opacity = `${parseFloat(item.style.opacity) + increment}`;
            }
        })
    });
}

pixelCreation(25);
hoverEffect();


const btn = document.querySelector(".grid-btn");
btn.addEventListener("click", (e) => {
    let size = parseInt(prompt(
        "How many squares per side should the grid have? (Max: 100)"
    ));

    container.innerHTML = "";

    if (size > 100) {
        alert("The maximum grid size is 100 squares per side.\nPlease reset the grid again with the correct size.")
    } else {
        pixelCreation(size);
        hoverEffect()
    }


})