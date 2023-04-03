# Cell Animation

This is a simple yet attractive animation that makes an image appear to be drawn one block at a time in a grid.

### [Check it out!](https://spindlymist.github.io/cell-animation/)

## Usage

To use it, simply wrap the `<img>` you want to animate in a `<div>` of class `animation-container`. Then import and call `runCellAnims`:

```html
<div class="animation-container">
    <img src="example.png" alt="Example image">
</div>
```
```js
import { runCellAnims } from "./cell-anim.js";
runCellAnims();
```

You can animate a single `<img>` in much the same way by calling `runCellAnim` on the `<div>` instead:

```js
import { runCellAnim } from "./cell-anim.js";
const div = document.querySelector(".my-div");
runCellAnim(div);
```

## Customization

Several data attributes and CSS variables can be tweaked on the container `<div>` to get different effects.

- `data-grid-rows` and `data-grid-cols` set the number of rows and columns in the grid.
- `data-anim-stagger` adjusts the delay between the start of one cell's animation and the next.
- `--anim-speed` controls the duration of each cell's animation.
- `--initial-color` sets the starting color of each cell.
- `--flash-color` sets the color each cell will flash before fading away.

If you want to change the class names, update the CSS and then pass the new name(s) to `runCellAnims`/`runCellAnim`:

```js
// first argument is the container *selector*
// second argument is the grid *class name*
runCellAnims(".custom-container-class", "custom-grid-class");

// runCellAnim only needs the grid class name
runCellAnim(div, "custom-grid-class");
```
