import React from "react"
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
              img
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <h3>Some things I've built</h3>
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <S.Container>
          <S.leftSide>
            <h3 key={index}>{edge.node.frontmatter.title}</h3>
            <S.description>{edge.node.frontmatter.description}</S.description>
            <S.tagContainer>
              {edge.node.frontmatter.tags.map(tag => (
                <S.tagItems>{tag}</S.tagItems>
              ))}
            </S.tagContainer>
          </S.leftSide>
          <S.rightSide>
            {edge.node.html}
            <p>{edge.node.frontmatter.repoLink}</p>
            <p>{edge.node.frontmatter.webLink}</p>
          </S.rightSide>
        </S.Container>
      ))}
    </div>
  )
}

export default Projects
