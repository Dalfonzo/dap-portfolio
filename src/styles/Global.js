import { createGlobalStyle } from "styled-components"
import { Themes } from "./Themes"

export const GlobalStyle = createGlobalStyle`
  ${Themes}

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    /* font size se determina 10/16 */
    box-sizing: border-box;
    font-size: 62.5%;
  }
`
