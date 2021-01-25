import React, { useEffect } from "react"
import styled from "styled-components"
import { BiCoffeeTogo } from "react-icons/bi"
import { FaHeart } from "react-icons/fa"

const Footer = () => {
  
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          Made with <BiCoffeeTogo /> and <FaHeart /> by Soo Spitz
        </p>
      </FooterContent>

    </FooterContainer>

  )
}

export default Footer

const FooterContainer = styled.div`
  
  padding: 5rem, calc((100vw - 1300px) / 2);
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #161616;
  color: #79797b;
`
const FooterContent = styled.div`
  text-align: center;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`