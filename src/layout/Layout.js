import React from "react"
import { GlobalStyle } from "../styles"
import "../styles/FontFaces.css"

const Layout = props => (
  <>
    <GlobalStyle />
    {props.children}
  </>
)

export default Layout
