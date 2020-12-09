import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#ff99aa',
      main: '#e91e63',
      dark: '#cc0032',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#7c70ff',
      main: '#0000ee',
      dark: '#0000a3',
      contrastText: '#ffffff'
    },
    grey: {
      50: '#f5f5f5',
      100: '#e0e0e0',
      200: '#cccccc',
      300: '#b8b8b8',
      400: '#a3a3a3',
      500: '#8f8f8f',
      600: '#7a7a7a',
      700: '#525252',
      800: '#292929',
      900: '#141414'
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920
    }
  },
  // shadows: {
  //   0: 'none',
  //   1: '0px 1px 3px rgba(0, 0, 0, 0.2)',
  //   2: '0px 4px 6px rgba(0, 0, 0, 0.2)',
  //   3: '0px 5px 15px rgba(255, 51, 101, 0.3)',
  //   4: '0px 10px 24px rgba(0, 0, 0, 0.2)',
  //   5: '0px 15px 35px rgba(0, 0, 0, 0.2)',
  //   6: '0px 1px 2px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
  //   7: '0px 2px 4px rgba(0, 0, 0, 0.12), 0px 3px 6px rgba(0, 0, 0, 0.15)',
  //   8: '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.15)',
  //   9: '0px 5px 10px rgba(0, 0, 0, 0.1), 0px 15px 25px rgba(0, 0, 0, 0.15)',
  // },
  typography: {
    htmlFontSize: 16,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '3.75rem'
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '3rem'
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '2.5rem'
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '2.25rem'
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: '2rem',
      color: '#141414'
    },
    h6: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '1.5rem'
    },
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '1.25rem',
      color: '#7a7a7a'
    },
    body2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '1rem'
    },
    button: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '1rem',
      textTransform: 'uppercase'
    },
    caption: {},
    overline: {}
  }
});

theme = responsiveFontSizes(theme);

export default theme;
