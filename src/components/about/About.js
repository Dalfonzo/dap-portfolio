import React from "react"
import * as S from "./styles"

const About = () => {
  return (
    <S.container>
      <h2>About</h2>
      <p>
        I’m an informatic engineering student (currently 8th semester) living in
        Caracas, VE. I enjoy building stuffs whether that be websites,
        applications, or anything in between.
        <br />
        <br />I started my coding journey back in 2017 and since then I haven’t
        stoped. I’ve been in contact with many languages during this years in
        college like
        <S.styledSpan>C, SQL, Java, C#, python and JavaScript</S.styledSpan>
        but I’m mainly interested in the last two.
        <br />
        <br />I also, have been recently working with some others tecnologies as
        <S.styledSpan>
          React, Gatsby, Node & Express, MongoDB & Mongoose, Postgresql, HTML &
          CSS and Firebase.
        </S.styledSpan>
      </p>
    </S.container>
  )
}

export default About
