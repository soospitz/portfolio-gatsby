import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Video from "../assets/videos/motion.mp4"

const motionGraphic = () => {
  return (
    <Layout>
      <SEO title="Motion" />
      <MotionGraphicContainer>
        <Heading>Motion Graphic Project</Heading>
        <VideoContainer
          src={Video}
          type="video/mp4"
          autoPlay
          loop
          playsInline
          muted
        />
      </MotionGraphicContainer>
    </Layout>
  )
}

export default motionGraphic

const MotionGraphicContainer = styled.div`
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
