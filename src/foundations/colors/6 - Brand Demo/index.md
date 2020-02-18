# Brand Demo

Just play around! The theme is based on the Split Complimentary color harmony by default. To change the harmony, adjust the value passed to `getColorWithOffset` function in the `index.tsx` file colocated with this file.

**Split Complimentary**

```
const primaryColor = `color-${color}-${shade.primary}`;
const secondaryColor = `color-${getColorWithOffset(color, 5)}-${
  shade.secondary
}`;
const tertiaryColor = `color-${getColorWithOffset(color, 7)}-${
  shade.tertiary
}`;
```

**Triadic**

```
const primaryColor = `color-${color}-${shade.primary}`;
const secondaryColor = `color-${getColorWithOffset(color, 4)}-${
  shade.secondary
}`;
const tertiaryColor = `color-${getColorWithOffset(color, 8)}-${
  shade.tertiary
}`;
```

**Analogous**

```
const primaryColor = `color-${color}-${shade.primary}`;
const secondaryColor = `color-${getColorWithOffset(color, -1)}-${
  shade.secondary
}`;
const tertiaryColor = `color-${getColorWithOffset(color, 1)}-${
  shade.tertiary
}`;
```
