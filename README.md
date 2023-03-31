# Cell Animation

This is a simple yet attractive animation that makes an image appear to be drawn one block at a time in a grid. To use it, simply wrap your `<img>` in a `<div>` with the class `animation-container`. Then call `initContainer` on the `<div>`.

### [Check it out!](https://spindlymist.github.io/cell-animation/)

## Customization

Several data attributes and CSS variables can be tweaked on the container `<div>` to get different effects.

- `data-grid-rows` and `data-grid-cols` set the number of rows and columns in the grid.
- `data-anim-stagger` adjusts the delay between the start of one cell's animation and the next.
- `--anim-speed` controls the duration of each cell's animation.
- `--initial-color` sets the starting color of each cell.
- `--flash-color` sets the color each cell will flash before fading away.
