import React from "react"
import Icons from "../icon-links/IconLinks"
import * as S from "./styles"

const Footer = () => {
  return (
    <S.container>
      <Icons />
      <S.p>coded and designed by David Pérez</S.p>
      <S.p>&copy; 2021</S.p>
    </S.container>
  )
}

export default Footer
