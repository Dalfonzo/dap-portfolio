import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styles"

const IconLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          codepen
          email
          linkedin
        }
      }
    }
  `)

  const { github, codepen, email, linkedin } = data.site.siteMetadata

  return (
    <div>
      <S.link target="blank" href={github}>
        <S.github />
      </S.link>
      <S.link target="blank" href={linkedin}>
        <S.linkedin />
      </S.link>
      <S.link target="blank" href={codepen}>
        <S.codepen />
      </S.link>
    </div>
  )
}

export default IconLinks
