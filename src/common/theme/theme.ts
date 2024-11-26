// TODO. font-size,

const grey = {
  0: '#FFFFFF',
  1: '#E9E8EC',
  2: '#6e6e73',
  3: '#272729',
  4: '#1D1D1F',
  5: '#000000',
};
const point = {
  orenge: '#fd8c1f',
  pink: '#ff3f98',
  violet: '#e9a5ff',
  blue: '#4186fd',
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
      bg: grey[5],
      title01: grey[1],
      sub_title: grey[2],
      description: grey[3],
      ...point,
    },
    radius,
  },
  light: {
    id: 'light',
    color: {
      bg: grey[0],
      title01: grey[4],
      sub_title: grey[3],
      description: grey[2],
      ...point,
    },
    radius,
  },
};

export default theme;
