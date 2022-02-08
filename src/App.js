import { useRef, useState } from 'react'
import styled from 'styled-components'
import GlobalStyled from './styled/globalStyle'
import {
  StartLogoContainer,
  StartLogo,
  TransparentLine
} from './styled/StartLogo'
import Header from './Header'
import useTimeout from './useTimeout'
import theme from './styled/theme'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const { colors, fontSizes, transition, medias, fonts } = theme

const Main = styled.div`
  max-width: 1600px;
  width: 100%;
  min-height: 100vh;
  padding: 0 150px;
  margin: 0 auto;
  counter-reset: section 0;

  @media (max-width: ${medias.sm}) {
    padding: 0 100px;
  }
  @media (max-width: ${medias.xs}) {
    padding: 0 50px;
  }
`

const Section = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Section1 = styled(Section)`
  p {
    color: ${colors.slate};
    max-width: 600px;
  }

  &.fadeIn {
    h1,
    h2,
    h3,
    p {
      opacity: 0;
    }
  }

  &.fadeIn.active {
    h1,
    h2,
    h3,
    p {
      animation: fadeIn 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }
    h1 {
      animation-delay: 500ms;
    }
    h2 {
      animation-delay: 600ms;
    }
    h3 {
      animation-delay: 700ms;
    }
    p {
      animation-delay: 800ms;
    }
  }
`

const Section2 = styled(Section)`
  padding: 100px 0;
  max-width: 900px;
  min-height: fit-content;
  h2 {
    font-size: ${fontSizes.xxl};
    display: flex;
    align-items: center;
    padding: 10px 0px 40px;
  }

  h2::before {
    content: '';
    display: block;
    color: ${colors.green};
    counter-increment: section;
    content: '0' counter(section) '.';
    font-size: ${fontSizes.lg};
    margin-right: 5px;
  }

  h2::after {
    content: '';
    display: block;
    width: 200px;
    height: 1px;
    background-color: ${colors.lightestNavy};
    margin-left: 20px;
  }

  &.fadeIn {
    h2,
    div {
      opacity: 0;
    }
  }

  &.fadeIn.active {
    h2,
    div {
      animation: fadeIn 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }
    h2 {
      animation-delay: 100ms;
    }
    div {
      animation-delay: 200ms;
    }
  }
`
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

const Section3 = styled(Section2)``

const Section4 = styled(Section2)`
  max-width: 600px;
  margin: 0px auto 100px;
  text-align: center;
  h2,
  h2::before {
    display: block;
    text-align: center;
  }
  h2::after {
    content: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 50px;
  }

  &.fadeIn {
    a,
    p {
      opacity: 0;
    }
  }

  &.fadeIn.active {
    a,
    p {
      animation: fadeIn 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    }
    p {
      animation-delay: 300ms;
    }
    a {
      animation-delay: 400ms;
    }
  }
`

const Skills = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: ${fontSizes.sm};
  }

  li::before {
    content: '▹';
    position: absolute;
    left: 0px;
    top: 3px;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
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

const Avatar = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 1;
  z-index: 99;
  border-radius: var(--border-radius);
`

const StyledTabs = styled(Tabs)`
  display: flex;
  min-height: 340px;
`

const StyledTab = styled(Tab)`
  list-style: none;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.sm};
  color: ${colors.slate};
  position: relative;
  transition: ${transition};
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0px 20px 2px;
  border-left: 2px solid ${colors.lightestNavy};
  background-color: transparent;
  text-align: left;
  white-space: nowrap;

  :hover {
    background-color: ${colors.lightNavy};
  }

  &.react-tabs__tab--selected,
  &:hover {
    color: ${colors.green};
  }
`

const StyledTabList = styled(TabList)`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;
`

const TabHighlight = styled.li`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: ${colors.green};
  transform: translateY(calc(var(--tab-index) * var(--tab-height)));
  transition: transform 0.25s ease-out 0.1s;
`

const StyledTabPanel = styled(TabPanel)`
  opacity: 0;
  transition: ${transition};

  p {
    font-size: ${fontSizes.base};
    color: ${colors.lightSlate};
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
  }

  a {
    font-size: ${fontSizes.lg};
  }

  h3 {
    margin-bottom: 2px;
    font-size: ${fontSizes.lg};
    color: ${colors.lightestSlate};
    font-weight: 500;
    line-height: 1.3;
  }

  &.react-tabs__tab-panel--selected {
    opacity: 1;
    width: 100%;
    margin-left: 20px;
  }
`

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${transition};
  color: ${colors.green};
  font-size: ${fontSizes.base};
  margin-left: 10px;
  ::after {
    content: '';
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${colors.green};
    transition: ${transition};
    opacity: 0.5;
    margin-top: 7px;
  }
  :hover:after,
  :active:after {
    width: 100%;
  }
  :hover,
  :active {
    outline: 0px;
  }
`

const LinkButton = styled.a`
  position: relative;
  border: 1px solid ${colors.green};
  padding: 20px;
  color: ${colors.green};
  background-color: transparent;
  text-decoration: none;
  font-size: ${fontSizes.base};
  border-radius: var(--border-radius);
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.green};
    opacity: 0;
    transition: ${transition};
  }

  :hover::after,
  :active::after {
    background-color: ${colors.green};
    opacity: 0.1;
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  flex-direction: column;
  padding: 15px;
  text-align: center;

  span {
    color: ${colors.lightSlate};
    font-family: ${fonts.mono};
    font-size: ${fontSizes.xs};
    line-height: 2;
  }
`

function App() {
  const [isShowStartLogo, setIsShowStartLogo] = useState(true)
  const lastScrollTop = useRef(0)

  useTimeout(() => {
    setIsShowStartLogo(false)
  }, 2100)
  useTimeout(() => {
    const elementHeader = document.getElementById('header')
    const sideLeft = document.getElementById('sideLeft')
    const sideRight = document.getElementById('sideRight')

    elementHeader.childNodes.forEach(element => {
      element.childNodes.forEach(child => {
        child.classList.add('active')
      })
    })

    sideLeft.classList.add('active')
    sideRight.classList.add('active')

    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('active', entry.isIntersecting)
          if (entry.isIntersecting) observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2
      }
    )

    sections.forEach(section => {
      observer.observe(section)
    })

    window.onscroll = () => {
      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop.current) {
        // downscroll code
        elementHeader.classList.remove('fixed')
        elementHeader.classList.add('fadeOut')
      } else {
        // upscroll code
        if (st > 20) {
          elementHeader.classList.add('fixed')
          elementHeader.classList.remove('fadeOut')
        } else {
          elementHeader.classList.remove('fixed')
          elementHeader.classList.remove('fadeOut')
        }
      }
      lastScrollTop.current = st <= 0 ? 0 : st // for mobile scroll
    }
  }, 2200)

  return (
    <div className="App">
      <GlobalStyled />
      {isShowStartLogo ? (
        <StartLogoContainer>
          <StartLogo>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <TransparentLine></TransparentLine>
          </StartLogo>
        </StartLogoContainer>
      ) : (
        <>
          <Header></Header>
          <Main id="content">
            <Section1 className="fadeIn">
              <h1>Hi, my name is</h1>
              <h2>Trinh Phuc Thinh</h2>
              <h3>I build things for the web.</h3>
              <p>I’m a software engineer specializing in Web developer</p>
            </Section1>
            <Section2 id="about" className="fadeIn">
              <h2>About Me</h2>
              <Inner>
                <InnerLeft>
                  <p>
                    Hello! My name is Thinh and I enjoy creating things by
                    programming, My first web development started back in 2010
                    when I decided to try creating a forum for Audition player —
                    turns out hacking a custom post button taught me a lot about
                    HTML & CSS!
                  </p>
                  <p>
                    Fast-forward to today, I’ve had the privilege of working at
                    an a start-up and a huge corporation. My main focus these
                    days is building accessible, inclusive products and digital
                    experiences for a variety of clients.
                  </p>
                  <p>
                    I am looking for a new job opportunity in React, React
                    Native Dev, full stack or relative positions.
                  </p>
                  <p>
                    Here are a few technologies I’ve been working with recently:
                  </p>
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
                    <Avatar
                      src="IMGM8337.jpg"
                      width="500"
                      height="500"
                      decoding="async"
                      alt="avatar"
                    ></Avatar>
                  </ImageWrapper>
                </InnerRight>
              </Inner>
            </Section2>
            <Section3 id="experience" className="fadeIn">
              <h2>Where I’ve Worked</h2>
              <StyledTabs
                onSelect={index => {
                  const root = document.documentElement
                  root.style.setProperty('--tab-index', index)
                }}
              >
                <StyledTabList>
                  <StyledTab>CMC TSSG</StyledTab>
                  <StyledTab>Inmatech</StyledTab>
                  <StyledTab>FPT Shop</StyledTab>
                  <TabHighlight />
                </StyledTabList>

                <StyledTabPanel>
                  <h3>
                    CMC TSSG
                    <InlineLink
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.cmctssg.vn/"
                    >
                      @ CMC
                    </InlineLink>
                  </h3>
                  <p>October 2015 - January 2017</p>
                  <Skills>
                    <li>
                      Worked closely with designers and management team to
                      develop the CMIS (business process management information
                      system) website using Angular, and Bootstrap, MVC
                      Architecture Parttern, MySql
                    </li>
                    <li>
                      Manually tested sites in various browsers and mobile
                      devices to ensure cross-browser compatibility and
                      responsiveness
                    </li>
                    <li>
                      Engineered and maintained old version of CMIS (MIS) code
                      for client using C# WinForms MVC Pattern, MySql
                    </li>
                  </Skills>
                </StyledTabPanel>
                <StyledTabPanel>
                  <h3>
                    Inmatech Corp
                    <InlineLink
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://inmatechcorp.com"
                    >
                      @ Inmatech
                    </InlineLink>
                  </h3>
                  <p>March 2015 - September 2015</p>
                  <Skills>
                    <li>
                      Developed and maintained code for in-house websites
                      primarily using HTML, CSS, JavaScript, and jQuery
                    </li>
                    <li>
                      Manually tested sites in various browsers and mobile
                      devices to ensure cross-browser compatibility and
                      responsiveness
                    </li>
                  </Skills>
                </StyledTabPanel>
                <StyledTabPanel>
                  <h3>
                    FPT Shop
                    <InlineLink target="_blank" rel="noopener noreferrer">
                      @ FPT
                    </InlineLink>
                  </h3>
                  <p>December 2014 - January 2015</p>
                  <Skills></Skills>
                </StyledTabPanel>
              </StyledTabs>
            </Section3>
            <Section4 id="contact" className="fadeIn">
              <h2>Get In Touch</h2>
              <p>
                I am looking for a new job opportunity in React, React Native
                Dev, full stack or relative positions., my inbox is always open
                whether you have connections or just want to say hi, I’ll get
                back to you soon.
              </p>
              <LinkButton href="mailto:thinhsofa@gmail.com">
                Say Hello
              </LinkButton>
            </Section4>
          </Main>
          <Footer>
            <span>Designed by Brittany Chiang</span>
            <span>Built by Trinh Phuc Thinh</span>
          </Footer>
        </>
      )}
    </div>
  )
}

export default App
