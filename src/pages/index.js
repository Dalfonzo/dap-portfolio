import React from "react"
import Layout from "../layout/Layout"
import Header from "../components/header/Header"
import Projects from "../components/projects/Projects"
import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Resume from "../components/resume/Resume"

const index = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </Layout>
  )
}

export default index
