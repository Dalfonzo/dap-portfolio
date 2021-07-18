import React from "react"
import * as S from "./styles"
import * as S2 from "../resume/styles"

const About = () => {
  return (
    <S.container>
      <S2.container>
        <S2.title>Important Note!</S2.title>
        <p>
          This site is under construction. As soon as I have time to finish it,
          I will! But thank you for passing by :)
        </p>
      </S2.container>
      <h2>About</h2>
      <p>
        I’m a informatic engineering student living in Caracas, VE and I enjoy
        building stuffs whether that be websites, applications, or anything in
        between with a main focus on front end development.
        <br />
        <br />
        I’ve been in contact with many programing languages during my years in
        college but I’m mainly interested in{" "}
        <S.styledSpan>Python and JavaScript.</S.styledSpan>
        <br />
        <br />I have experience working in a wide range of technologies
        including
        <S.styledSpan>
          React, Redux, Vue, Sass, CSS, Jest, PostgreSQL, Git, Gatsby and many
          others.
        </S.styledSpan>
      </p>
    </S.container>
  )
}

export default About
