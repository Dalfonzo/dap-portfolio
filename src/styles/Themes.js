import { css } from "styled-components"
import * as C from "./Colors"

export const Themes = css`
  :root {
    --highlight: ${C.blue};
  }

  .darkMode {
    --background: ${C.darkBlue};
    --text: ${C.white};
    --contactBg: ${C.darkBlue01};
    --contactBorder: ${C.white};
    --resumeBg: ${C.darkBlue01};
    --resumeBorder: ${C.white};
  }

  .lightMode {
    --background: ${C.white};
    --text: ${C.black};
    --contactBg: ${C.blue02};
    --contactBorder: ${C.blue01};
    --resumeBg: ${C.green};
    --resumeBorder: ${C.green01};
  }
`
