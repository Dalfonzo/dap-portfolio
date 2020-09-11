import styled, { css } from "styled-components"
import { Sizes } from "../styles"

const properties = css`
  margin: auto;
  padding: 0.5rem 1.5rem;
`

export const Wrapper = styled.div`
  max-width: ${Sizes.maxWidth};
  min-width: ${Sizes.minWidth};
  ${properties}
`
export const Container = styled.div`
  max-width: ${Sizes.innerWidth};
  ${properties}
`
