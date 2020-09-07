import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              boobs
            }
          }
        }
      }
    }
  `)

  console.log(data.allMarkdownRemark.edges)

  return (
    <div>
      <h3>Some things I've built</h3>
      {data.allMarkdownRemark.edges.map((edge, index) => (
        <h3 key={index}>{edge.node.frontmatter.title}</h3>
      ))}
    </div>
  )
}

export default Projects
