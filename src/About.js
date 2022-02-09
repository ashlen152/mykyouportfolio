import React from 'react'
import styled from 'styled-components'
import { Skills } from './styled/globalStyle'
import { Image } from './styled/Image'
import { StyledAbout } from './styled/Section'
import theme from './styled/theme'
const { colors, fontSizes, transition, medias, fonts } = theme

const Inner = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: ${medias.xs}) {
    display: block;
  }
`
const InnerLeft = styled.div`
  p {
    margin: 0px 0px 15px;
  }
`

const SkillsTwoCols = styled(Skills)`
  margin-top: 20px;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0 10px;

  li {
    font-family: ${fonts.mono};
    font-size: ${fontSizes.sm};
  }
`

const InnerRight = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: ${medias.xs}) {
    display: grid;
    place-items: center;
    max-width: 100%;
    margin-top: 50px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  max-width: 300px;
  height: 300px;

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    mix-blend-mode: multiply;
    transition: ${transition};
    background-color: ${colors.green};
    border-radius: 7px;
  }

  ::after {
    content: '';
    top: 20px;
    left: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: ${transition};
    border: 2px solid ${colors.green};
    z-index: -1;
  }

  :hover:before {
    background-color: transparent;
  }

  :hover:after {
    top: 13px;
    left: 13px;
    background-color: transparent;
  }
`
const About = () => {
  return (
    <StyledAbout id="about" className="fadeIn">
      <h2>About Me</h2>
      <Inner>
        <InnerLeft>
          <p>
            Hello! My name is Thinh and I enjoy creating things by programming,
            My first web development started back in 2010 when I decided to try
            creating a forum for Audition player — turns out hacking a custom
            post button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, I’ve had the privilege of working at an a
            start-up and a huge corporation. My main focus these days is
            building accessible, inclusive products and digital experiences for
            a variety of clients.
          </p>
          <p>
            I am looking for a new job opportunity in React, React Native Dev,
            full stack or relative positions.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <SkillsTwoCols>
            <li>Javascript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>C#</li>
            <li>Angular 1</li>
          </SkillsTwoCols>
        </InnerLeft>
        <InnerRight>
          <ImageWrapper>
            <Image
              src="IMGM8337.jpg"
              width="500"
              height="500"
              decoding="async"
              alt="Image"
            ></Image>
          </ImageWrapper>
        </InnerRight>
      </Inner>
    </StyledAbout>
  )
}

export default About
