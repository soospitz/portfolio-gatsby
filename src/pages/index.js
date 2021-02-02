import React, { useState } from "react"
import Dropdown from "../components/Dropdown"
import Footer from "../components/Footer"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Experiences from "../components/Experiences"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import scrollTo from "gatsby-plugin-smoothscroll"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SEO title="Home" />
      <GlobalStyle />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Nav>
        <NavHome onClick={() => scrollTo("#home")}>☾</NavHome>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink onClick={() => scrollTo("#home")}>Home</NavLink>
          <NavLink onClick={() => scrollTo("#projects")}>Projects</NavLink>
          <NavLink onClick={() => scrollTo("#experiences")}>Experiences</NavLink>
          <NavLink onClick={() => scrollTo("#skills")}>Skills</NavLink>
          <NavLink onClick={() => scrollTo("#contact")}>Contact</NavLink>
        </NavMenu>
      </Nav>

      <Hero id="home" />
      <Projects heading="Projects" id="projects" />
      <Experiences id="experiences" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </>
  )
}

export default IndexPage
const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  padding-right: 3rem;
  z-index: 199;
  position: sticky;
  top: 0;
`
const NavHome = styled(Link)`
  font-size: 1.4rem;
  color: #96d1ea;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  transition: 1s;
  float: right;
  padding-left: 3rem;
  cursor: pointer;

  &:hover {
    color: #6c6c6c;
  }
`
const NavLink = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  transition: 1s;
  float: right;
  cursor: pointer;

  &:hover {
    color: #6c6c6c;
  }
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
