import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",

    },
    secondary: {
      main: "#1A1A40",
    },
    text: {
      primary: "#323232"
    }
  },
  typography: {

    fontFamily: [
      'Roboto',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme