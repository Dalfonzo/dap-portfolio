import React from "react"
import * as S from "./styles"

const Resume = () => {
  return (
    <S.container>
      <S.title>Resume</S.title>
      <p>
        You can grab a copy of my resume clicking
        <S.styledLink href="#">here</S.styledLink>
      </p>
    </S.container>
  )
}

export default Resume
