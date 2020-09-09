import React from "react"
import Icons from "../icon-links/IconLinks"
import { graphql, useStaticQuery } from "gatsby"
import * as S from "./styles"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <S.container>
      <S.author>{data.site.siteMetadata.author}</S.author>
      <p>Engineering Student</p>
      <p>
        I write some code and commit it to
        <S.gitLink target="blank" href="https://github.com/Dalfonzo">
          Github
        </S.gitLink>
      </p>
      <Icons />
    </S.container>
  )
}

export default Header
