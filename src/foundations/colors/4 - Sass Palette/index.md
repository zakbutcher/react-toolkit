# Let's Get Sassy

RGB & Hex are cool, but they make generating color palettes programatically more difficult. Fret not! Sass and the HSL color space are here to the rescue.

The Hue Saturation Lightness (HSL) color space lets us do everything we could with hex with one important addition. We can modify the lightness of a color directly to modulate how light or dark a color is. No more fancy hex ~~math~~ magic!

## Step 1 - Define your bases

- Base Grey: `#808080`
- Base Primary: `#E02169`

## Step 2 - Define your shades of grey (only 5 this time)

- #202020 - Base - 75% lightness
- #404040 - Base - 50% lightness
- #606060 - Base - 25% lightness
- #808080 - Base
- #a0a0a0 - Base + 25% lightness
- #c0c0c0 - Base + 50% lightness
- #dfdfdf - Base + 75% lightness

## Step 3 - Generate your palette

- Apply same transforms to Base Primary and other generated oclors
- Rotate `hue` 60 degrees between colors for 6-color palette
- Rotate `hue` 30 degrees between colors for 12-color palette
