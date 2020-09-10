import styled from "styled-components"
import { Colors, fontSizes } from "../../styles"

export const cardContainer = styled.article`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
`

export const tagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const tagItems = styled.span`
  margin: 0.5rem;
  color: ${Colors.highlight};
  font-size: ${fontSizes.normal};
`

export const description = styled.p`
  color: ${Colors.lightSecondaryColor};
  margin: 1rem 2rem 1rem 0;
`

export const iconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

export const link = styled.a`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
`
