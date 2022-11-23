import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const themes = {
  avangers: {
    bg: "#ceceff",
    color: "#335",
    color2: "rgba(5, 5, 100, 0.5)"
  },
  kingkom: {
    bg: "#ccffcc",
    color: "#010",
    color2: "rgba(50, 100, 50, 0.5)"
  },
  terminator: {
    bg: "#bc8e47",
    color: "#010",
    color2: "#010"
  },
  superman: {
    bg: "#00f",
    color: "#00c",
    color2: "#094293"
  }
};

export const Theme = (props) => (
  <ThemeProvider theme={themes[props.theme.toLowerCase()]}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
