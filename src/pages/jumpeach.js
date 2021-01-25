import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button } from "../components/Button"

const jumpeach = () => {
  return (
    <Layout>
      <SEO title="JUMPEACH" />
      <JumpeachContainer>
        <Heading>JUMPEACH</Heading>
        <GridContainer>
          <GameContainer>
            <iframe
              src="https://itch.io/embed-upload/1717298?color=333333"
              title="Jumpeach"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              width="520"
              height="590"
            />
          </GameContainer>

          <InstructionContainer>
            <div>
              <h4>
                Platform Game made with Unity using <i>C#</i>
              </h4>
              <p>
                Play the game on the left! <br />
                Reach the Green Cloud to win <br />
                Jump on the Grey Cloud for boost <br />
                Watch out for the Pink Cloud
              </p>
              <Button to="https://github.com/soospitz/JUMPEACH/" primary="true">
                Code
              </Button>
            </div>
          </InstructionContainer>
        </GridContainer>
      </JumpeachContainer>
    </Layout>
  )
}

export default jumpeach

const JumpeachContainer = styled.div`
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
const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
`
const GameContainer = styled.div`
  margin-left: 3rem;
`
const InstructionContainer = styled.div`
  p {
    text-align: start;
    padding: 4rem;
    font-size: clamp(0.5rem, 5vw, 1rem);
    line-height: 2rem;
  }
`
