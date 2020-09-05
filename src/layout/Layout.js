import React from "react"
import { GlobalStyle, GlobalType } from "../styles"
import * as S from "./styles"
import Header from "../components/header/Header"
import "../styles/FontFaces.css"

const Layout = props => (
  <S.Container>
    <Header />
    <GlobalStyle />
    <GlobalType />
    {props.children}
  </S.Container>
)

export default Layout
