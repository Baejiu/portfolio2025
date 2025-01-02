// TODO. font-size,

const grey = {
  0: '#FFFFFF',
  1: '#E9E8EC',
  2: '#6e6e73',
  3: '#272729',
  4: '#1D1D1F',
  5: '#111111',
};
const lightDefault = {
  header: '#fffc',
  bg: grey[0],
  title01: grey[4],
  title_sub: grey[3],
  description: grey[2],
  line: grey[1],
};
const darkDefault = {
  header: '#000c',
  bg: grey[5],
  line: grey[4],
  title01: grey[1],
  title_sub: grey[2],
  description: grey[0],
};
const point = {
  white: grey[0],
  black: grey[5],
  orenge: '#fd8c1f',
  pink: '#ff3f98',
  violet: '#e9a5ff',
  blue: '#4186fd',
  green: '#49E2AC',
  lightGreen: '#eaf4e7',
};
const radius = {
  none: '0px',
  small: '4px',
  medium: '8px',
  large: '20px',
  round: '50%',
};

const theme = {
  dark: {
    id: 'dark',
    color: {
      ...darkDefault,
      ...point,
    },
    radius,
  },
  light: {
    id: 'light',
    color: {
      ...lightDefault,
      ...point,
    },
    radius,
  },
};

type colorType = keyof typeof lightDefault | keyof typeof point;
type radiusType = keyof typeof radius;

export type { colorType, radiusType };
export default theme;
