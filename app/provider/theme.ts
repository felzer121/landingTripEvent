import { ThemeOptions } from "@mui/material/styles";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  typography: {
    fontFamily: ["inherit", "Roboto"].join(","),
  },
  palette: {
    primary: {
      main: "#111",
    },
    secondary: {
      main: "#111",
    },
  },
});

export default themeOptions;
