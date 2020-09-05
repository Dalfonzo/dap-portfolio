import React from "react"
import * as S from "./styles"

const Home = () => {
  return (
    <S.container>
      <h1>Hey, I’m David Pérez</h1>
      <p>
        I’m a informatic engineering student (currently 8th semester) living in
        Caracas, VE. I also write some code and commit it to
        <S.gitLink target="blank" href="https://github.com/Dalfonzo">
          Github
        </S.gitLink>
        or
        <S.codeLink target="blank" href="https://codepen.io/dalfonzo18">
          CodePen
        </S.codeLink>
      </p>
    </S.container>
  )
}

export default Home
