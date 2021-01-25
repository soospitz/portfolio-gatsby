import React, { useEffect } from "react"
import styled from "styled-components"
import { SkillsData } from "../data/SkillsData"
import { SkillsData2 } from "../data/SkillsData2"
import Aos from "aos"
import "aos/dist/aos.css"

const Skills = () => {
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <SkillsContainer>
      <Heading
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        Skills
      </Heading>
      <Type data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="50">Worked with</Type>
      <Wrapper>
        {SkillsData.map((item, index) => {
          return (
            <SkillsBox
              key={index}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </SkillsBox>
          )
        })}
      </Wrapper>
      <Type data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="50">Design</Type>
      <Wrapper>
        {SkillsData2.map((item, index) => {
          return (
            <SkillsBox
              key={index}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </SkillsBox>
          )
        })}
      </Wrapper>
    </SkillsContainer>
  )
}

export default Skills

const SkillsContainer = styled.div`
  width: 100%;
  background: #161616;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem calc((100vw - 1300px) / 2);
`
const Heading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
  padding-left: 4rem;
`
const Type = styled.h3`
  text-align: start;
  font-size: clamp(0.5rem, 5vw, 1rem);

  padding: 0 2rem;
  padding-left: 5rem;
  color: #79797b;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 7px;
  margin-left: 5rem;
  margin-right: 5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const SkillsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`
const Icon = styled.div`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
`
const Title = styled.p`
  text-align: center;
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  margin-bottom: 0.5rem;
  color: #c6c6c6;
`
const Desc = styled.p``
