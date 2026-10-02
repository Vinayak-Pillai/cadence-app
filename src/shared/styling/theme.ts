export interface ColorPalette {
  paper: string;
  panel: string;
  ink: string;
  ink2: string;
  rule: string;
  wash: string;
  done: string;
  lapse: string;
  snooze: string;
  frozen: string;
  accent: string;
  accentInk: string;
}

export const lightColors: ColorPalette = {
  paper: '#f4efe6',
  panel: '#fbf8f2',
  ink: '#1d1b17',
  ink2: '#57524a',
  rule: '#d9d1c2',
  wash: '#ebe5d8',
  done: '#2f6b4f',
  lapse: '#b3402e',
  snooze: '#94620f',
  frozen: '#2f65a3',
  accent: '#1d1b17',
  accentInk: '#fbf8f2',
};

export const darkColors: ColorPalette = {
  paper: '#14130f',
  panel: '#1c1a15',
  ink: '#efe9dc',
  ink2: '#a39c8e',
  rule: '#34312a',
  wash: '#26231d',
  done: '#6fc29a',
  lapse: '#ef8b78',
  snooze: '#e0b055',
  frozen: '#86b4ec',
  accent: '#efe9dc',
  accentInk: '#14130f',
};

export const typography = {
  fontSerif: 'Georgia',
  fontSans: 'System',
  fontMono: 'Courier',
};

// Default theme tokens matching the root CSS values
export const theme = {
  colors: lightColors,
  typography,
};
