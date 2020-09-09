import styled, { css } from "styled-components"
import Github from "../../../icons/github.svg"
import Linkedin from "../../../icons/linkedin.svg"
import Codepen from "../../../icons/codepen.svg"

const properties = css`
  width: 100%;
  height: 100%;
`

export const link = styled.a`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: 2rem;
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
