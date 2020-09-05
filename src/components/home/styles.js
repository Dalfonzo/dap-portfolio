import styled, { css } from "styled-components"
import { Colors, fontWeights } from "../../styles"

export const container = styled.section`
  margin-bottom: 4rem;
`

export const properties = css`
  padding: 0.5rem 0;
  margin: 0.5rem;
  font-weight: ${fontWeights.bold};
  border-bottom: 3px solid currentColor;

  /* &:hover {
    transform: scale(1.1);
  } */
`

export const gitLink = styled.a`
  color: ${Colors.blueColor};
  ${properties}
`

export const codeLink = styled.a`
  color: ${Colors.fucsiaColor};
  ${properties}
`
