import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import Aos from "aos"
import "aos/dist/aos.css"

const Projects = () => {
  const [isHover, setIsHover] = useState(true)

  useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            alt
            button1
            button1link
            button2
            button2link
            desc
            sub
            title
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getProjects(data) {
    const projectsArray = []
    data.allProjectsJson.edges.forEach((item, index) => {
      projectsArray.push(
        <ProjectCard
          key={index}
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <ProjectImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProjectInfo>
            <TextWrap>
              <ProjectTitle>{item.node.title}</ProjectTitle>
              <ProjectSub>{item.node.sub}</ProjectSub>
              <ProjectDescription>{item.node.desc}</ProjectDescription>
            </TextWrap>
            <Button
              to={item.node.button1link}
              primary="true"
              css={`position: absolute; top: 420px; font-size 14px;`}
            >
              {item.node.button1}
            </Button>
            {item.node.button2 !== null ? (
              <Button
                to={item.node.button2link}
                primary="true"
                css={`position: absolute; top: 420px; left: 200px; font-size 14px;`}
              >
                {item.node.button2}
              </Button>
            ) : null}
          </ProjectInfo>
        </ProjectCard>
      )
    })
    return projectsArray
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectHeading
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        Projects
      </ProjectHeading>
      <ProjectWrapper>{getProjects(data)}</ProjectWrapper>
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem, calc((100vw - 1300px) / 2);
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #161616;
  color: #fff;
`
const ProjectHeading = styled.div`
  text-align: start;
  padding-left: 4rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
`
const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  justify-items: center;
  padding: 0 2rem;
  margin: 3rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin: 2rem;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    margin: 2rem;
  }
`
const ProjectCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`
const ProjectImg = styled(Img)`
  z-index: -10;
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  ${ProjectCard}:hover & {
    filter: brightness(5%);
    background-color: #161616;
    transition: 0.7s ease;
  }
`
const TextWrap = styled.div`
  top: 2rem;
  left: 2rem;
`
const ProjectTitle = styled.h2`
  top: 2rem;
  left: 2rem;
  margin-left: 0.5rem;
  position: absolute;
`
const ProjectSub = styled.h4`
  top: 6rem;
  left: 2rem;
  color: #c6c6c6;
  font-size: 1rem;
  margin-left: 0.5rem;
  display: none;
  position: absolute;
  ${ProjectCard}:hover & {
    display: inline;
  }
`
const ProjectDescription = styled.div`
  top: 10rem;
  left: 3rem;
  margin-right: 2rem;
  color: #79797b;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
  z-index: 10;
  display: none;
  position: absolute;
  ${ProjectCard}:hover & {
    display: inline;
  }
`
const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2em;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
