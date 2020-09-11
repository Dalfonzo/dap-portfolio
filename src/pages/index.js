import React from "react"
import Layout from "../layout/Layout"
import ToogleButton from "../components/toggle-button/ToggleButton"
import Header from "../components/header/Header"
import Projects from "../components/projects/Projects"
import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Resume from "../components/resume/Resume"
import Footer from "../components/footer/Footer"

const index = () => {
  return (
    <Layout>
      <ToogleButton />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </Layout>
  )
}

export default index
