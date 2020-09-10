import styled from "styled-components"
import { Colors, fontWeights } from "../../styles"

export const title = styled.h2`
  color: ${Colors.contactBorder};
`

export const container = styled.section`
  margin: 2rem 0;
  width: 100%;
  border: 1px solid ${Colors.contactBorder};
  background-color: ${Colors.contactBg};
  padding: 4rem;
  border-radius: 5px;
`

export const styledLink = styled.a`
  color: ${Colors.text};
  font-weight: ${fontWeights.bold};
  border-bottom: 2px solid ${Colors.text};
  padding: 0.5rem 0;
  margin: 0 0.5rem;
`
