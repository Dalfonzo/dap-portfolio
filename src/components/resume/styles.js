import styled from "styled-components"
import { Colors, fontWeights } from "../../styles"

export const title = styled.h2`
  color: ${Colors.resumeBorder};
`

export const container = styled.section`
  margin: 2rem 0;
  width: 100%;
  border: 1px solid ${Colors.resumeBorder};
  background-color: ${Colors.resumeBg};
  padding: 4rem;
  border-radius: 5px;
  @media only screen and (max-width: 400px) {
    padding: 3rem 2rem;
  }
`

export const styledLink = styled.a`
  color: ${Colors.text};
  font-weight: ${fontWeights.bold};
  border-bottom: 2px solid ${Colors.text};
  padding: 0.5rem 0;
  margin: 0 0.5rem;
`
