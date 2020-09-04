import React from "react"
import { GlobalStyle } from "../styles"

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  )
}

export default Layout
