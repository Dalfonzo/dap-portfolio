import styled from "styled-components"
import { Colors, fontWeights } from "../../styles"

export const container = styled.section`
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  &::after {
    left: 50%;
    transform: translateX(-50%);
    content: "";
    position: absolute;
    width: 5rem;
    border: 1px solid ${Colors.text};
  }
`

export const author = styled.h1`
  text-transform: uppercase;
  margin: 1rem 0;
`

export const gitLink = styled.a`
  color: ${Colors.highlight};
  padding: 0.5rem 0;
  margin: 0.5rem;
  font-weight: ${fontWeights.bold};
  border-bottom: 3px solid currentColor;
`
