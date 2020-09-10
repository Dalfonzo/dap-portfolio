import styled from "styled-components"
import { Colors } from "../../styles"

export const container = styled.section`
  margin: 4rem 0;
  width: 100%;
  border: 1px solid ${Colors.contactBorder};
  background-color: ${Colors.contactBg};
  padding: 4rem;
  border-radius: 5px;
`

export const styledLink = styled.a`
  color: ${Colors.highlight};
  border-bottom: 1px solid ${Colors.highlight};
  padding: 0.5rem 0;
  margin: 0 0.5rem;
`
