# Etch-a-Sketch Project

A browser-based Etch-a-Sketch application built as part of **The Odin Project – Foundations Path**.  
This project recreates the classic drawing toy using a dynamic grid of div elements that change color and opacity when hovered over.

---

## Features

- Generates a **customizable grid** (up to 100×100).
- Hovering over each square:
  - Assigns a **random RGB color**.
  - Gradually increases opacity on repeated passes.
- A **Reset Grid** button allows users to regenerate the grid with a user-defined size.
- Responsive styling using **flexbox** and dynamic square sizing.

---

## How It Works

### Grid Creation  
The grid is built using JavaScript by creating a number of div elements equal to: size x size.
Each square automatically adjusts its width and height to fit inside a fixed 700×700 container.

### Hover Coloring  
Each grid square listens for a `mouseover` event. When triggered:
- The background becomes a random RGB color.
- Opacity increases in increments of **0.1** until it reaches full opacity.

### Reset Button  
The "Reset Grid" button prompts the user for a new size (max 100).  
The grid clears and regenerates with the requested dimensions.

---

## Files Included

- **index.html** — structure and UI
- **script.js** — grid generation, color logic, event listeners

---

## How to Use

1. Open the `index.html` file in your browser.
2. Hover your cursor over the grid to start drawing.
3. Click **Reset Grid** to choose a new grid size.
4. Enjoy experimenting with random colors and opacity blending.

---

## Future Improvements

- Add a “Color Mode” selector (black, random RGB, grayscale)
- Add an eraser tool
- Add a slider input instead of prompt()
- Add a border toggle or gridless mode

