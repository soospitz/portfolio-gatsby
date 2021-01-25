import React, { useEffect } from "react"
import styled from "styled-components"
import { GoMarkGithub } from "react-icons/go"
import { SiLinkedin } from "react-icons/si"
import { HiOutlineMailOpen } from "react-icons/hi"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    Aos.init({})
  }, [])
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
    <HeroContainer>
      <HeroBg>
        
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >Hi, I'm Soo
          </HeroH1>
          
          <HeroP
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          >Welcome to my Portfolio!</HeroP>
          <ContactIcons
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
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
          </ContactIcons>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;


`
const HeroBg = styled.div`
  background-color: #161616;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const HeroContent = styled.div`
background-color: #161616;
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%100vh;
  padding: 0em calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1.%;
  color: #fff;
  font-weight: bold;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
const ContactIcons = styled.div`
  font-size: 3rem;
`
