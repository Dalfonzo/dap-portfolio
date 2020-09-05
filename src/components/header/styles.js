import { Link } from "gatsby"
import { fontSizes, fontWeights, Colors } from "../../styles"
import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const HeaderLogo = styled(Link)`
  color: ${Colors.lightHighlightColor};

  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.bold};
`
