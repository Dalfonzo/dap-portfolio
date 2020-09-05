import React from "react"
import { GlobalStyle, GlobalType } from "../styles"
import { Container } from "./styles"
import "../styles/FontFaces.css"

const Layout = props => (
  <Container>
    <GlobalStyle />
    <GlobalType />
    {props.children}
  </Container>
)

export default Layout
