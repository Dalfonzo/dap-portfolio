import React from "react"
import Layout from "../layout/Layout"
import Intro from "../components/home/Home"
import Projects from "../components/projects/Projects"

const index = () => {
  return (
    <Layout>
      <Intro />
      <Projects />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt
        consequatur laboriosam totam saepe sint dolore reiciendis obcaecati
        deleniti delectus nihil perferendis voluptates blanditiis? Eos provident
        esse nisi voluptatum dolor!
      </p>
    </Layout>
  )
}

export default index
