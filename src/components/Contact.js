import React, { useEffect } from "react"
import styled from "styled-components"
import { GoMarkGithub } from "react-icons/go"
import { SiLinkedin } from "react-icons/si"
import { HiOutlineMailOpen } from "react-icons/hi"
import { Link } from "gatsby"

import Aos from "aos"
import "aos/dist/aos.css"

const Contact = ({ name }) => {
  useEffect(() => {
    Aos.init({})
  }, [])
  const ButtonMailto = ({ mailto }) => {
    return (
      <Link
        to="mailto:soospitz@gmail.com"
        onClick={e => {
          window.location = mailto
          e.preventDefault()
        }}
      >
        <HiOutlineMailOpen
          css={`
            font-size: 3.5rem;
            margin: 1rem;
            color: #fff;
            transition: 1s;
            &:hover {
              color: #96d1ea;
              transform: translateY(-2px);
              cursor: pointer;
            }
          `}
        />
      </Link>
    )
  }

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ColumnOne>
          <h1 data-aos="fade-down" data-aos-duration="1200" data-aos-delay="50">
            Contact
          </h1>
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
            Leave a message and say hello!
          </p>
          <ContactIcons
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <ButtonMailto
              label="Write me an E-Mail"
              mailto="mailto:soospitz@gmail.com"
            />

            <Link to="https://www.linkedin.com/in/soospitz/">
              <SiLinkedin
                css={`
                  margin: 1rem;
                  color: #fff;
                  transition: 1s;
                  &:hover {
                    color: #96d1ea;
                    transform: translateY(-2px);
                    cursor: pointer;
                  }
                `}
              />
            </Link>
            <Link to="https://github.com/soospitz">
              <GoMarkGithub
                css={`
                  margin: 1rem;
                  color: #fff;
                  transition: 1s;
                  &:hover {
                    color: #96d1ea;
                    transform: translateY(-2px);
                    cursor: pointer;
                  }
                `}
              />
            </Link>
          </ContactIcons>
        </ColumnOne>
        {/* <ColumnTwo>
          <Form
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name={name}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value={name} />

              <div className="field">
                <label>
                  Name
                  <Input>
                    <input type="text" name="name" id="name" />
                  </Input>
                </label>
              </div>
              <div className="field">
                <label>
                  Email
                  <Input>
                    <input type="email" name="email" id="email" />
                  </Input>
                </label>
              </div>
              <div className="field">
                <label>
                  Subject
                  <Input>
                    <input type="text" name="subject" id="subject" />
                  </Input>
                </label>
              </div>
              <div className="field">
                <label>
                  Message
                  <Message>
                    <textarea name="message" id="message" rows="5" />
                  </Message>
                </label>
              </div>
              <ButtonContainer>
                <ContactButton type="submit">Send</ContactButton>
                <ContactButton type="reset" value="Clear">
                  Clear
                </ContactButton>
              </ButtonContainer>
            </form>
          </Form>
        </ColumnTwo> */}
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
  padding-bottom: 2rem;
  
  color: #fff;
  align-items: center;
  background-color: #161616;
`
const ContactContent = styled.div`
  padding: 0 2rem;
  padding-top: 5rem;
`
const ColumnOne = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    text-align: center;
    font-weight: normal;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }
  p {
    color: #c6c6c6;
    font-size: 1rem;
    margin-bottom: 0.75em;
  }
  @media screen and (max-width: 868px) {
    width: 100%;
  }
`

const ContactIcons = styled.div`
  font-size: 3rem;
  margin: 4rem 0;
`

// const ColumnTwo = styled.div`
//   width: 70%;
//   margin: 4rem 2rem 2rem 2rem;
//   @media screen and (max-width: 868px) {
//     width: 100%;
//   }
// `
// const Form = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 5rem;

//   label,
//   input {
//     transition: all 0.2s;
//     touch-action: manipulation;
//   }
//   .field {
//     display: block;
//     flex-flow: column-reverse;
//     margin-bottom: 1em;
//   }
//   input {
//     width: 350px;
//     font-size: 1.5em;
//     border: 0;
//     border-bottom: 1px solid #ccc;
//     background-color: #161616;
//     border-radius: 0;
//     padding: 0;
//     cursor: text;
//     color: #fff;
//   }
//   label {
//     text-transform: uppercase;
//     letter-spacing: 0.05em;
//   }
//   textarea {
//     display: block;
//     width: 350px;
//     border: 1px solid #ccc;
//     background-color: #161616;
//     border-radius: 0;
//     padding: 0;
//     cursor: text;
//     color: #fff;
//   }

//   input:focus {
//     outline: 0;
//     border-bottom: 2px solid #666;
//   }
// `
// const Message = styled.div`
//   display: block;
//   padding-top: 1rem;
// `
// const Input = styled.div`
//   display: block;
// `
// const ButtonContainer = styled.div`
//   margin-top: 2rem;
// `
// const ContactButton = styled(Link)`
//   background: #161616;
//   white-space: nowrap;
//   padding: 10px 32px;
//   color: #fff;
//   font-size: 16px;
//   outline: none;
//   border: 2px solid #96d1ea;
//   margin-right: 1rem;
//   min-width: 100px;
//   cursor: pointer;
//   text-decoration: none;
//   transition: 0.3s !important;
//   border-radius: 10px;

//   &:hover {
//     background: #96d1ea;
//     color: #161616;
//     transform: translateY(-2px);
//   }
//   a {
//     color: #fff;
//   }
// `
