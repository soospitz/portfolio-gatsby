import React, { useEffect } from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

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
          >
          </HeroH1>
          
          <HeroP
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          >Out of this world</HeroP>
          <Button
            primary="true"
            big="true"
            round="true"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="350"
          >
            Travel Now
          </Button>
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
