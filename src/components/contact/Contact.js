import React from "react"
import * as S from "./styles"

const Contact = () => {
  return (
    <S.container>
      <S.title>Contact</S.title>
      {/* <h2>Contact</h2> */}
      <p>
        I’m currently looking for new oportunitys and exciting projects. so, If
        you have something in mind and want me to work with you or your team,
        leave a message
        <S.styledLink href="mailto:dalfonzo18@gmail.com">here</S.styledLink> and
        I’ll get back to you.
      </p>
    </S.container>
  )
}

export default Contact
