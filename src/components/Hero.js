import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { GoMarkGithub } from "react-icons/go"
import { SiLinkedin } from "react-icons/si"
import { HiOutlineMailOpen } from "react-icons/hi"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query MyQueryHe {
      allHeroDataJson {
        edges {
          node {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  `)

  const ButtonMailto = ({ mailto }) => {
    return (
      <Link
        to="mailto:soospitz@gmail.com"
        onClick={e => {
          window.location = mailto
          e.preventDefault()
        }}
      >
        <HiOutlineMailOpen
          css={`
            font-size: 3.5rem;
            margin: 1rem;
            color: #fff;
            &:hover {
              color: #96d1ea;
              transform: translateY(-2px);
              cursor: pointer;
            }
          `}
        />
      </Link>
    )
  }

  return (
    <HeroContainer id="home">
      <HeroContent>
        <ImgContent>
          <OuterImg
            src={
              data.allHeroDataJson.edges[0].node.img.childImageSharp.fluid.src
            }
            alt={data.allHeroDataJson.edges[0].node.alt}
            fluid={data.allHeroDataJson.edges[0].node.img.childImageSharp.fluid}
          />
          <OuterImg2
            src={
              data.allHeroDataJson.edges[1].node.img.childImageSharp.fluid.src
            }
            alt={data.allHeroDataJson.edges[1].node.alt}
            fluid={data.allHeroDataJson.edges[1].node.img.childImageSharp.fluid}
          />
          <OuterImg3
            src={
              data.allHeroDataJson.edges[2].node.img.childImageSharp.fluid.src
            }
            alt={data.allHeroDataJson.edges[2].node.alt}
            fluid={data.allHeroDataJson.edges[2].node.img.childImageSharp.fluid}
          />
          
          <InnerImg
            src={
              data.allHeroDataJson.edges[3].node.img.childImageSharp.fluid.src
            }
            alt={data.allHeroDataJson.edges[3].node.alt}
            fluid={data.allHeroDataJson.edges[3].node.img.childImageSharp.fluid}
          />
          {/* <ContactIcons>
            <ButtonMailto
              label="Write me an E-Mail"
              mailto="mailto:soospitz@gmail.com"
            />

            <Link to="https://www.linkedin.com/in/soospitz/">
              <SiLinkedin
                css={`
                  margin: 1rem;
                  color: #fff;
                  &:hover {
                    color: #96d1ea;
                    transform: translateY(-2px);
                    cursor: pointer;
                  }
                `}
              />
            </Link>
            <Link to="https://github.com/soospitz">
              <GoMarkGithub
                css={`
                  margin: 1rem;
                  color: #fff;
                  &:hover {
                    color: #96d1ea;
                    transform: translateY(-2px);
                    cursor: pointer;
                  }
                `}
              />
            </Link>
          </ContactIcons> */}
          
        </ImgContent>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background-color: #161616;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-top: -80px;
  color: #fff;
`

const HeroContent = styled.div`
  background-color: #161616;
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%100vh;
  padding: 0em calc((100vw - 1300px) / 2);
`

const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`
const spinscale = keyframes`
  from {
    transform:rotate(0deg) scale(1.0);
  }
  to {
    transform:rotate(360deg) scale(2.0);
  }
`
const OuterImg = styled(Img)`
  z-index: 10;
  display: absolute;
  margin: 0 auto;
  top: 35px;
  width: 655px;
  animation: ${spin} 15s linear 0s infinite;
  animation-direction: reverse;
  filter: invert(77%) sepia(3%) saturate(5%) hue-rotate(55deg) brightness(103%) contrast(95%);
  &:hover {
    animation-play-state: paused;
  }
  @media screen and (max-width: 280px) {
   
    
  }
`
const OuterImg2 = styled(Img)`
  z-index: 10;
  display: absolute;
  margin: 0 auto;
  top: -520px;
  width: 455px;
  animation: ${spin} 20s linear 0s infinite;
  /* animation-direction: alternate; */
  filter: invert(100%);
  &:hover {
    animation-play-state: paused;
  }
`
const OuterImg3 = styled(Img)`
  z-index: 10;
  display: absolute;
  margin: 0 auto;
  top: -890px;
  width: 285px;
  animation: ${spin} 10s linear 0s infinite;
  animation-direction: reverse;
  filter: invert(97%) sepia(0%) saturate(1231%) hue-rotate(118deg) brightness(92%) contrast(75%);
  &:hover {
    animation-play-state: paused;
  }
`
const InnerImg = styled(Img)`
  z-index: 40;
  display: absolute;
  margin: 0 auto;
  top: -1085px;
  width: 80px;
  transition: transform 0.25s, visibility 0.25s ease-in;
  filter: invert(91%) sepia(8%) saturate(3080%) hue-rotate(168deg)
    brightness(96%) contrast(89%);
  &:hover {
    transform: scale(1.2);
    filter: invert(84%) sepia(7%) saturate(5820%) hue-rotate(323deg)
      brightness(105%) contrast(94%);
  }
`
const ContactIcons = styled.div`
display: relative !important;
  z-index: 50;
  top: -730px;
  font-size: 3rem;
  
`
const ImgContent = styled.div`

display: relative;
`
