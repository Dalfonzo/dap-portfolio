import React from "react"
import { GlobalStyle, GlobalType } from "../styles"
import * as S from "./styles"
import Header from "../components/header/Header"
import "../styles/FontFaces.css"

const Layout = props => (
  <S.Wrapper>
    <Header />
    <S.Container>
      <GlobalStyle />
      <GlobalType />
      {props.children}
    </S.Container>
  </S.Wrapper>
)

export default Layout
