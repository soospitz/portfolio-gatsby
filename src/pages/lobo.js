import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Video from "../assets/videos/mockup.mp4"
import Footer from "../components/Footer"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "gatsby"

const lobo = () => {
  return (
    <>
      <SEO title="Lobo" />
      <GlobalStyle />
      
      <LoboContainer>
      <Heading>
          <Link to="/">
            <IoIosArrowBack
              css={`
                font-size: 2.5rem;
                margin-right: 1rem;
                color: #fff;
                transition: 1s;
                &:hover {
                  color: #6c6c6c;
                  cursor: pointer;
                }
              `}
            />
          </Link>
          Lobo Mockup
        </Heading>
        <VideoContainer
          src={Video}
          type="video/mp4"
          autoPlay
          loop
          playsInline
          muted
        />
      </LoboContainer>
      <Footer/>
    </>
  )
}

export default lobo

const LoboContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  align-items: center;
  background-color: #161616;
`
const Heading = styled.div`
  text-align: start;
  padding-left: 4rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
`
const VideoContainer = styled.video`
  width: 80%;
  margin-left: 3rem;
`
