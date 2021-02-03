import React from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <>
      <GlobalStyle />
      <ErrorContainer>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </ErrorContainer>
      <Footer />
    </>
  )
}

export default NotFoundPage

const ErrorContainer = styled.div`
  font-family: "Poppins", sans-serif;

  width: 100%;
  height: 45vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  align-items: center;
  background-color: #161616;
  padding: 5rem;
  h1 {
    font-size: clamp(2rem, 5vw, 5rem);
    margin-bottom: 2rem;
    margin-top: 5rem;
  }
  p {
    text-align: center;
    font-size: clamp(1rem, 5vw, 2rem);
    margin-bottom: 4rem;
  }
`

const Button = styled(Link)`
  background: #161616;
  white-space: nowrap;
  padding: 10px 32px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: 2px solid #96d1ea;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 15px;

  &:hover {
    background: #96d1ea;
    color: #161616;
    transform: translateY(-2px);
  }
`
