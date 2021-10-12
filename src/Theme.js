import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      tertiary: "#ECBA53",
      black: "#23262F",
      lightBlack: "#4C5D77"
    },
    primary: {
      main: "#0747a6"
    },
    secondary: {
      main: "#52d869"
    },
    background: {
      default: "#FCFCFD"
    }
  },
  typography: {
    fontSize: 14,
    h2: {
      color: "#303030",
      fontWeight: 600,
      fontSize: "26px",
      lineHeight: "38px"
    },
    h3: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "28px",
      color: "#303030"
    },
    body1: {
      fontWeight: 400,
      lineHeight: "24px",
      fontSize: "15px",
      fontStyle: "normal",
      color: "#81868c",
      letterSpacing: ".1px"
    }
  }
});

export default theme;
