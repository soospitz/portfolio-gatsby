import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"

const Projects = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            alt
            button1
            button1link
            button2
            button2link
            desc
            sub
            title
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

  function getProjects(data) {
    const projectsArray = []
    data.allProjectsJson.edges.forEach((item, index) => {
      projectsArray.push(
        <ProjectCard
          key={index}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <ProjectImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProjectTitle>{item.node.title}</ProjectTitle>
          <ProjectInfo>
            <ProjectSub>{item.node.sub}</ProjectSub>
            <ProjectDescription>{item.node.desc}</ProjectDescription>
            <ButtonWrap>
              <Link to={item.node.button1link}>
                <Buttons
                  to={item.node.button1link}
                  css={`position: absolute; top: 280px; font-size 14px;`}
                >
                  {item.node.button1}
                </Buttons>
              </Link>
              {item.node.button2 !== null ? (
                <Link to={item.node.button2link}>
                <Buttons
                  to={item.node.button2link}
                  css={`position: absolute; top: 280px; left: 195px; font-size 14px;`}
                >
                  {item.node.button2}
                </Buttons></Link>
              ) : null}
            </ButtonWrap>
          </ProjectInfo>
        </ProjectCard>
      )
    })
    return projectsArray
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectHeading
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        Projects
      </ProjectHeading>
      <ProjectWrapper>{getProjects(data)}</ProjectWrapper>
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem, calc((100vw - 1300px) / 2);
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #161616;
  color: #fff;
`
const ProjectHeading = styled.div`
  text-align: start;
  padding-left: 4rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
`
const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  justify-items: center;
  padding: 0 2rem;
  margin: 3rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin: 2rem;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    margin: 2rem;
  }
`
const ProjectCard = styled.div`
  z-index: 90;
  line-height: 1.5;
  width: 100%;
  height: 450px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: 0.2s ease;
`
const ProjectImg = styled(Img)`
  z-index: -10;
  height: 100%;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  border-radius: 10px;
  filter: brightness(100%);
  transition: bottom 0.5s;
  ${ProjectCard}:hover & {
    filter: brightness(50%);
    background-color: #161616;
    transition: 0.7s ease;
  }
`
const ProjectInfo = styled.div`
  position: absolute;
  bottom: -400px;
  width: 100%;
  height: 360px;
  display: flex;
  padding: 0 2em;
  z-index: 10;
  flex-direction: column;
  backdrop-filter: blur(15px);
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: bottom 0.5s;
  ${ProjectCard}:hover & {
    bottom: 0px;
  }
  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const ProjectTitle = styled.h2`
  top: 2rem;
  left: 2rem;
  margin-left: 0.5rem;
  position: absolute;
`
const ProjectSub = styled.h4`
  top: 2rem;
  left: 2rem;
  color: #fff;
  font-size: 1rem;
  margin-left: 0.5rem;
  /* display: none; */
  position: absolute;
  transform: translateY(40px);
  transition: 0.5s;
  opacity: 0;

  ${ProjectCard}:hover & {
    transform: translateY(0px);
    opacity: 1;
  }
`
const ProjectDescription = styled.div`
  top: 6rem;
  left: 3rem;
  margin-right: 2rem;
  color: #c6c6c6;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
  z-index: 10;
  /* display: none; */
  position: absolute;
  /* ${ProjectCard}:hover & {
    display: inline;
  } */
`
const Buttons = styled.div`
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(225, 225, 225, 0.3);
  backdrop-filter: blur(50px);
  white-space: nowrap;
  padding: 10px 32px;
  color: #fff;
  font-size: 16px;
  outline: none;
  /* border: 2px solid #96d1ea; */
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 15px;

  &:hover {
    background-color: #96d1ea;
    color: #fff;
    transform: translateY(-2px);
  }
`

const ButtonWrap = styled.div``

// import React, { useEffect } from "react"
// import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { Button } from "./Button"
// import Aos from "aos"
// import "aos/dist/aos.css"

// const Projects = () => {
//   useEffect(() => {
//     Aos.init({})
//   }, [])

//   const data = useStaticQuery(graphql`
//     query ProjectsQuery {
//       allProjectsJson {
//         edges {
//           node {
//             alt
//             button1
//             button1link
//             button2
//             button2link
//             desc
//             sub
//             title
//             img {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   function getProjects(data) {
//     const projectsArray = []
//     data.allProjectsJson.edges.forEach((item, index) => {
//       projectsArray.push(
//         <ProjectCard
//           key={index}
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-delay="50"
//         >
//           <ProjectImg
//             src={item.node.img.childImageSharp.fluid.src}
//             alt={item.node.alt}
//             fluid={item.node.img.childImageSharp.fluid}
//           />
//           <ProjectInfo>
//             <TextWrap>
//               <ProjectTitle>{item.node.title}</ProjectTitle>
//               <ProjectSub>{item.node.sub}</ProjectSub>
//               <ProjectDescription>{item.node.desc}</ProjectDescription>
//               <ButtonWrap>
//                 <Button
//                   to={item.node.button1link}
//                   primary="true"
//                   css={`position: absolute; top: 380px; font-size 14px;`}
//                 >
//                   {item.node.button1}
//                 </Button>
//                 {item.node.button2 !== null ? (
//                   <Button
//                     to={item.node.button2link}
//                     primary="true"
//                     css={`position: absolute; top: 380px; left: 195px; font-size 14px;`}
//                   >
//                     {item.node.button2}
//                   </Button>
//                 ) : null}
//               </ButtonWrap>
//             </TextWrap>
//           </ProjectInfo>
//         </ProjectCard>
//       )
//     })
//     return projectsArray
//   }

//   return (
//     <ProjectsContainer id="projects">
//       <ProjectHeading
//         data-aos="fade-down"
//         data-aos-duration="1200"
//         data-aos-delay="50"
//       >
//         Projects
//       </ProjectHeading>
//       <ProjectWrapper>{getProjects(data)}</ProjectWrapper>
//     </ProjectsContainer>
//   )
// }

// export default Projects

// const ProjectsContainer = styled.div`
//   min-height: 100vh;
//   padding: 5rem, calc((100vw - 1300px) / 2);
//   padding-top: 5rem;
//   padding-bottom: 5rem;
//   background: #161616;
//   color: #fff;
// `
// const ProjectHeading = styled.div`
//   text-align: start;
//   padding-left: 4rem;
//   margin-bottom: 4rem;
//   font-size: clamp(1.5rem, 5vw, 2rem);
// `
// const ProjectWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 30px;
//   justify-items: center;
//   padding: 0 2rem;
//   margin: 3rem;

//   @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr;
//     margin: 2rem;
//   }
//   @media screen and (max-width: 868px) {
//     grid-template-columns: 1fr;
//     margin: 2rem;
//   }
// `
// const ProjectCard = styled.div`
//   line-height: 1.5;
//   width: 100%;
//   height: 450px;
//   position: relative;
//   border-radius: 10px;
//   transition: 0.2s ease;
// `
// const ProjectImg = styled(Img)`
//   z-index: -10;
//   height: 100%;
//   max-width: 100%;
//   position: relative;
//   border-radius: 10px;
//   filter: brightness(100%);
//   transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
//   ${ProjectCard}:hover & {
//     filter: brightness(5%);
//     background-color: #161616;
//     transition: 0.7s ease;
//   }
// `
// const TextWrap = styled.div`
//   top: 2rem;
//   left: 2rem;
// `
// const ProjectTitle = styled.h2`
//   top: 2rem;
//   left: 2rem;
//   margin-left: 0.5rem;
//   position: absolute;
// `
// const ProjectSub = styled.h4`
//   top: 6rem;
//   left: 2rem;
//   color: #c6c6c6;
//   font-size: 1rem;
//   margin-left: 0.5rem;
//   display: none;
//   position: absolute;
//   ${ProjectCard}:hover & {
//     display: inline;
//   }
// `
// const ProjectDescription = styled.div`
//   top: 10rem;
//   left: 3rem;
//   margin-right: 2rem;
//   color: #79797b;
//   font-weight: 400;
//   font-size: 1rem;
//   margin-left: 0.5rem;
//   z-index: 10;
//   display: none;
//   position: absolute;
//   ${ProjectCard}:hover & {
//     display: inline;
//   }
// `
// const ProjectInfo = styled.div`
//   display: flex;
//   padding: 0 2em;

//   @media screen and (max-width: 280px) {
//     padding: 0 1rem;
//   }
// `
// const ButtonWrap = styled.div`

// `
