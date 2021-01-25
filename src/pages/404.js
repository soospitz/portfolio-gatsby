import React from "react"
import {Button} from "../components/Button"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorContainer>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Button to="/" primary="true">
        Return Home
      </Button>
    </ErrorContainer>
  </Layout>
)

export default NotFoundPage

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  align-items: center;
  background-color: #161616;
  padding: 5rem ;
  h1{
    font-size: clamp(2rem, 5vw, 5rem);
    margin-bottom: 2rem;
    margin-top: 5rem;
  }
  p{
    text-align: center;
    font-size: clamp(1rem, 5vw, 2rem);
    margin-bottom: 2rem;
  }
`
