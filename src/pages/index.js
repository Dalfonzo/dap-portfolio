import React from "react"
import Layout from "../layout/Layout"
import Header from "../components/header/Header"
import Projects from "../components/projects/Projects"
import About from "../components/about/About"

const index = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
      <p style={{ color: "var(--resumeBorder)" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt
        consequatur laboriosam totam saepe sint dolore reiciendis obcaecati
        deleniti delectus nihil perferendis voluptates blanditiis? Eos provident
        esse nisi voluptatum dolor!
      </p>
    </Layout>
  )
}

export default index
