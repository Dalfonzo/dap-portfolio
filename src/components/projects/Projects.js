import React from "react"
import { Icons } from "../../styles"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styles"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              tags
              repoLink
              webLink
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <h2>Some things I've built</h2>
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <S.cardContainer>
          <h3 key={index}>{edge.node.frontmatter.title}</h3>
          <S.description>{edge.node.frontmatter.description}</S.description>
          <S.tagContainer>
            {edge.node.frontmatter.tags.map(tag => (
              <S.tagItems>{tag}</S.tagItems>
            ))}
          </S.tagContainer>
          <S.iconsContainer>
            <S.link href={edge.node.frontmatter.repoLink}>
              <Icons.github />
            </S.link>
            <S.link href={edge.node.frontmatter.webLink}>
              <Icons.external />
            </S.link>
          </S.iconsContainer>
        </S.cardContainer>
      ))}
    </div>
  )
}

export default Projects
