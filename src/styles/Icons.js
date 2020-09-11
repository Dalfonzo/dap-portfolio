import styled, { css } from "styled-components"
import { Colors } from "./index"
import Github from "../../icons/github.svg"
import Linkedin from "../../icons/linkedin.svg"
import Codepen from "../../icons/codepen.svg"
import External from "../../icons/external.svg"
import Moon from "../../icons/moon.svg"
import Sun from "../../icons/sun.svg"

const properties = css`
  width: 100%;
  height: 100%;
  fill: ${Colors.text};
`

export const github = styled(Github)`
  ${properties}
`

export const linkedin = styled(Linkedin)`
  ${properties}
`

export const codepen = styled(Codepen)`
  ${properties}
`

export const external = styled(External)`
  ${properties}
`

export const moon = styled(Moon)`
  ${properties}
`
export const sun = styled(Sun)`
  ${properties}
`
