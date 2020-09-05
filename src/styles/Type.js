import { css, createGlobalStyle } from "styled-components"

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
}

export const fontSizes = {
  small: "1.2rem",
  normal: "1.5rem",
  medium: "3rem",
  big: "4rem",
}

export const body = css`
  font-family: "Montserrat", "Arial";
`

export const h1 = css`
  font-size: ${fontSizes.big};
  font-weight: ${fontWeights.bold};
  margin: 3rem 0;
`

export const h2 = css`
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.bold};
`

export const h3 = css`
  font-size: ${fontSizes.normal};
  font-weight: ${fontWeights.bold};
`

export const p = css`
  font-size: ${fontSizes.normal};
  line-height: 1.6;
`

export const a = css`
  font-size: ${fontSizes.normal};
  text-decoration: none;

  &:active {
    color: inherit;
  }
`

export const GlobalType = createGlobalStyle`
  body {
    ${body}
  }

  p {
    ${p}
  }

  h1 {
    ${h1}
  }

  h2 {
    ${h2}
  }

  h3 {
    ${h3}
  }

  a {
    ${a}
  }
`
