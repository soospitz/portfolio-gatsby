import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Experiences from "../components/Experiences"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <Projects heading="Projects" id="projects" />
    <Experiences id="experiences" />
    <Skills id="skills" />
    <Contact id="contact" />

  </Layout>
)

export default IndexPage
