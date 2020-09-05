import React from "react"
import Nav from "../nav/Nav"
import * as S from "./styles"

const Header = () => (
  <S.Header>
    <S.HeaderLogo to="/">--dap</S.HeaderLogo>
    <Nav />
  </S.Header>
)

export default Header
