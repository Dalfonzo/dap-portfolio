import styled, { css } from "styled-components"
import Github from "../../icons/github.svg"
import Linkedin from "../../icons/linkedin.svg"
import Codepen from "../../icons/codepen.svg"
import External from "../../icons/external.svg"

const properties = css`
  width: 100%;
  height: 100%;
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
