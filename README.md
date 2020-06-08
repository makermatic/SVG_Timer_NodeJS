# SVG-Timer README
## https://svgtimer.netlify.app/

## Controls
- C Key: Start Timer
- Spacebar: Reset Timer
- Any Other Key: Stop Timer

## How To Customize Timer
### Changing Seconds
1. In line 4, change the value of the `seconds` variable. Right now its set to 30

### Changing Background Fill Color
1. In line 21, change the parameter of `fill()`.
- Can be a hex, greyscale, or color name
- Note: Must in be quotations or code will crash
- For more info, [check out the p5 reference on fill] (https://p5js.org/reference/#/p5/fill)

### Changing Box Outline Color
1. Same exact way as changing background fill, except you change the parameter in `stroke()`.

### Changing Font Size
1. Change the second parameter in line 14
- Must be a number or code will crash

### Changing Font Color
1. Change the third parameter in line 15
- Same exact way as changing Background Fill or Stroke

## Known Issues/Caveats
- No bounding box for timer text, making it shuffle a little bit