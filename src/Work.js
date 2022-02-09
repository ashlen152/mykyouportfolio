import React from 'react'
import { StyledWork } from './styled/Section'
import styled from 'styled-components'
import theme from './styled/theme'
import { Image } from './styled/Image'
const { colors, transition, fontSizes, fonts, medias } = theme

const ProjectContent = styled.div`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
  z-index: 10;

  @media (max-width: ${medias.sm}) {
    grid-column: 1 / 9;
  }
  @media (max-width: ${medias.xs}) {
    grid-column: 1 / -1;
    padding: 25px;
  }
`

const ProjectImg = styled.div`
  box-shadow: 0 10px 30px -15px ${colors.navyShadow};
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  @media (max-width: ${medias.xs}) {
    grid-column: 1 / -1;
  }
`

const ProjectImageWrapper = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: inline-block;
  @media (max-width: ${medias.xs}) {
    opacity: 0.25;
  }
  img {
    filter: grayscale(100%) contrast(1) brightness(90%);
    transition: filter 0.1s linear;
  }

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 9;
    left: 0;
    position: absolute;
    mix-blend-mode: multiply;
    background-color: hsl(185, 60%, 70%);
    border-radius: 7px;
    transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover:before {
    background-color: transparent;
  }

  :hover img {
    filter: none;
  }

  :hover:after {
    top: 13px;
    left: 13px;
    background-color: transparent;
  }
`

const ProjectOverline = styled.p`
  margin: 10px 0px;
  color: ${colors.green};
  font-family: ${fonts.mono};
  font-size: ${fontSizes.base};
  font-weight: 400;
`

const ProjectTitle = styled.h3`
  color: ${colors.lightestSlate};
  font-size: clamp(24px, 5vw, 28px);
  margin-bottom: 10px;
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
  }
`

const ProjectDescription = styled.div`
  box-shadow: 0 10px 30px -15px ${colors.navyShadow};
  transition: ${transition};
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  font-size: ${fontSizes.base};

  @media (max-width: ${medias.xs}) {
    background-color: transparent;
    padding: 0;
  }
`

const ProjectTechlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;

  li {
    margin: 0px 20px 5px 0px;
    color: ${colors.lightSlate};
    font-family: ${fonts.mono};
    font-size: ${fontSizes.base};
    white-space: nowrap;
  }
`

const ProjectLink = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${colors.lightestSlate};
`
const Work = () => {
  return (
    <StyledWork id="work" className="fadeIn">
      <h2>Some Things I’ve Built</h2>
      <ul>
        <li>
          <ProjectContent>
            <ProjectOverline>Building & Learning Project</ProjectOverline>
            <ProjectTitle>
              <a
                href="https://github.com/ashlen152/CoffeeMS"
                rel="noopener noreferrer"
                target="_blank"
              >
                Coffee Shop MS
              </a>
            </ProjectTitle>
            <ProjectDescription>
              This application website makes it easier to manage coffee sales,
              staff can order drinks for guests and print invoices, have daily
              revenue reports and manage inventory.
            </ProjectDescription>
            <ProjectTechlist>
              <li>ReactJS</li>
              <li>Typescript</li>
              <li>Styled-Component</li>
              <li>Nodejs</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ProjectTechlist>
            <ProjectLink>
              <a
                href="https://github.com/ashlen152/CoffeeMS"
                aria-label="GitHub Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://halcyon-theme.netlify.com/"
                aria-label="External Link"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </ProjectLink>
          </ProjectContent>
          <ProjectImg>
            <ProjectImageWrapper>
              <Image
                aria-hidden="true"
                data-placeholder-image=""
                decoding="async"
                src="Capture11.PNG"
              ></Image>
            </ProjectImageWrapper>
            <img />
          </ProjectImg>
        </li>

        <li>
          <ProjectContent>
            <ProjectOverline>Featured Project</ProjectOverline>
            <ProjectTitle>
              <a
                href="https://github.com/ashlen152/todolist"
                rel="noopener noreferrer"
                target="_blank"
              >
                Todo List
              </a>
            </ProjectTitle>
            <ProjectDescription>
              This application website helps to manage which languages and
              technologies to learn
            </ProjectDescription>
            <ProjectTechlist>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JWT-Auth</li>
            </ProjectTechlist>
            <ProjectLink>
              <a
                href="https://github.com/ashlen152/todolist"
                aria-label="GitHub Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://github.com/ashlen152/todolist"
                aria-label="External Link"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </ProjectLink>
          </ProjectContent>
          <ProjectImg>
            <ProjectImageWrapper>
              <Image
                aria-hidden="true"
                data-placeholder-image=""
                decoding="async"
                src="Capture1.PNG"
              ></Image>
            </ProjectImageWrapper>
          </ProjectImg>
        </li>
        <li>
          <ProjectContent>
            <ProjectOverline>Featured Project</ProjectOverline>
            <ProjectTitle>
              <a
                href="https://github.com/ashlen152/ShoppingCart"
                rel="noopener noreferrer"
                target="_blank"
              >
                Shopping Cart
              </a>
            </ProjectTitle>
            <ProjectDescription>
              Practice creating a website with shopping cart function, calculate
              the total amount in the cart, data is taken from fakestoreapi.com
            </ProjectDescription>
            <ProjectTechlist>
              <li>ReactJS</li>
              <li>MUI</li>
              <li>Styled-Component</li>
            </ProjectTechlist>
            <ProjectLink>
              <a
                href="https://github.com/ashlen152/ShoppingCart"
                aria-label="GitHub Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://halcyon-theme.netlify.com/"
                aria-label="External Link"
                className="external"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </ProjectLink>
          </ProjectContent>
          <ProjectImg>
            <ProjectImageWrapper>
              <Image
                aria-hidden="true"
                data-placeholder-image=""
                decoding="async"
                src="Capture31.PNG"
              ></Image>
            </ProjectImageWrapper>
            <img />
          </ProjectImg>
        </li>
      </ul>
    </StyledWork>
  )
}

export default Work
