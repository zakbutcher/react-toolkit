# Hex Magic

We now have the tools we need to create a color palette using the RGB color space & basic hex manipulation.

Given a starting color (e.g. `#f00`) we can do a few simple transforms to generate 6 colors that work together in a given color scheme:

- Create primary colors by rotating RGB channels: `#f00` -> `#0f0` -> `#00f`
- Create secondary colors by reversing order & rotating: `#f00` -> `#00f` -> `#0f0`

But wait, doesn't that just give us the original palette? In this case, yes! This strategy works best when a Tertiary color is used to define a palette. Using a Primary or Secondary color will only yield 3 colors!

Trying again, if we choose a different base (`#c09`), we can follow the same steps to get 3 colors!

- Create primary colors by rotating RGB channels: `#c09` -> `#9c0` -> `#09c`
- Create secondary colors by reversing order & rotating: `#c90` -> `#0c9` -> `#90c`
