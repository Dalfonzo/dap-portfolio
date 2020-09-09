import styled from "styled-components"
import { Colors, fontSizes, fontWeights } from "../../styles"

export const Container = styled.article`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
`

export const leftSide = styled.div`
  border: 1px solid red;
  flex: 1 1 50%;
`

export const rightSide = styled.div`
  border: 1px solid red;
  flex: 1 1 50%;
`

export const tagContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
`

export const tagItems = styled.span`
  margin: 0.5rem;
  color: ${Colors.lightHighlightColor};
  font-size: ${fontSizes.normal};
  font-weight: ${fontWeights.bold};
`

export const description = styled.p`
  color: ${Colors.lightSecondaryColor};
  margin: 1rem 2rem 1rem 0;
`
