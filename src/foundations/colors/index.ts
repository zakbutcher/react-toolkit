export * from './1 - Color Theory';
export * from './2 - Understanding Hex';
export * from './3 - Creating Color';
export * from './4 - Sass Palette';
export * from './5 - Color & Brand';
export * from './6 - Brand Demo';

export const colors = [
  'white',
  'black',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'seafoam',
  'cyan',
  'azure',
  'blue',
  'violet',
  'magenta',
  'rose',
];
export const shades = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

export type TCcolorName = typeof colors[number];
export type TShade = typeof shades[number];

export interface IColor {
  color: TColor;
  shade: TShade;
}

export type TColor = TCcolorName | IColor;
