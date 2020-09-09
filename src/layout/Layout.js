import React from "react"
import { GlobalStyle, GlobalType } from "../styles"
import * as S from "./styles"
import "../styles/FontFaces.css"

const Layout = props => (
  <S.Wrapper>
    <S.Container>
      <GlobalStyle />
      <GlobalType />
      {props.children}
    </S.Container>
  </S.Wrapper>
)

export default Layout
