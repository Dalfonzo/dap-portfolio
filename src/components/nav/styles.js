import styled from "styled-components"

import { Link } from "gatsby"

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`
export const NavLink = styled(Link)`
  padding: 0.5rem 1rem;
  text-transform: capitalize;
`
