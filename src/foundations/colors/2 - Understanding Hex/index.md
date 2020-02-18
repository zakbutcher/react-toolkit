# Hex Basics

The RGB color space uses a 6-digit hex value to define a color - 2 digits per channel. A color may be defined using a 3-digit hex value: `#abc` is equivalent to `#aabbcc`.

A single hex digit may be any number from 0-9 or a letter from a-f for a total of 16 different values. This means a 2-digit hex code can represent up to 256 possible values.

- The lowest value is `00` (0)
- The highest is `ff` (255)
- Halfway (depending on who you ask) is `7f` (127) or `80` (128)
- A 10% increase or decrease is `1a` (26).
- Greys are any color with equal R, G, & B components: `#000`, `#aaa`, or `#fff`
- Reds have equal Green & Blue channels: `#600`, `#f00`, or `#faa`
- Greens have equal Red & Blue channels: `#060`, `#0f0`, or `#afa`
- Blues have equal Red & Green channels: `#006`, `#00f`, or `#aaf`

# One Last Thing

- Hue is what most people mean when they say "color"
- Shades are created by adding black (for us, that means removing white)
- Tints are created by adding white
- Tones are created by modifying saturation (css `filter: saturate(.5)`)
