import styled from "styled-components"
import { Colors } from "../../styles"

export const container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
`

export const button = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${Colors.text};
  color: ${Colors.background};
  outline: none;
  padding: 1.2rem;
  border-radius: 5px;
  border: none;
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`
