import React from "react"
import Layout from "../layout/Layout"
import Header from "../components/header/Header"
import Projects from "../components/projects/Projects"
import About from "../components/about/About"
import Contact from "../components/contact/Contact"

const index = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default index
