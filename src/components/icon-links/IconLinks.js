import React from "react"
import { Icons } from "../../styles"
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

  const { github, codepen, linkedin } = data.site.siteMetadata

  return (
    <div>
      <S.link target="blank" href={github}>
        <Icons.github />
      </S.link>
      <S.link target="blank" href={linkedin}>
        <Icons.linkedin />
      </S.link>
      <S.link target="blank" href={codepen}>
        <Icons.codepen />
      </S.link>
    </div>
  )
}

export default IconLinks
