import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"

const Experiences = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query MyQuery {
      allExperiencesJson {
        edges {
          node {
            company
            description
            alt
            title
            years
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getExperiences(data) {
    const experiencesArray = []
    data.allExperiencesJson.edges.forEach((item, index) => {
      experiencesArray.push(
        <Testimonial>
          <ImgContainer
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
            <ExperiencesImg
              src={item.node.img.childImageSharp.fluid.src}
              alt={item.node.alt}
              fluid={item.node.img.childImageSharp.fluid}
            />
          </ImgContainer>
          <h3 data-aos="fade-left" data-aos-duration="1200" data-aos-delay="50">
            {item.node.title}
          </h3>
          <h4 data-aos="fade-left" data-aos-duration="1200" data-aos-delay="50">
            {item.node.company} | {item.node.years}
          </h4>
          <p data-aos="fade-left" data-aos-duration="1200" data-aos-delay="50">
            {item.node.description}
          </p>
        </Testimonial>
      )
    })
    return experiencesArray
  }

  return (
    <ExperiencesContainer>
      <ContentWrapper>
        <ColumnOne>
          <TopLine
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            Professional
          </TopLine>
          <Description
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
            Experiences
          </Description>
        </ColumnOne>
        <ColumnTwo>{getExperiences(data)}</ColumnTwo>
      </ContentWrapper>
    </ExperiencesContainer>
  )
}

export default Experiences

const ExperiencesContainer = styled.div`
  width: 100%;
  background: #161616;
  color: #fff;
  padding: 5rem calc((100vw - 1300px) / 2);
  padding-top: 5rem;
  padding-bottom: 10rem;
  height: 100%;
`
const TopLine = styled.div`
  color: #c6c6c6;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75em;
`

const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  width: 70%;
  @media screen and (max-width: 868px) {
    width: 100%;
  }
`
const ColumnTwo = styled.div`
  width: 70%;
  @media screen and (max-width: 868px) {
    width: 100%;
    padding-left: 2rem;
  }
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;
  h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: #c6c6c6;
  }
  h4 {
    margin-bottom: 1rem;
    color: #89868f;
  }
  p {
    margin-top: 1rem;
    color: #79797b;
  }
`
const ImgContainer = styled.div`
  padding-bottom: 1rem;
  padding-top: 2rem;
`
const ExperiencesImg = styled(Img)`
  max-height: 100%;
  object-fit: contain;
  width: 70px;
  height: auto;
  /* filter: brightness(70%); */
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  /* &:hover {
    filter: brightness(100%);
  } */
`
