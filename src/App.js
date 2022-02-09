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
import { Landing, Main, StyledContact } from './styled/Section'
import About from './About'
import Experiences from './Experiences'
import Work from './Work'

const { colors, fontSizes, transition, fonts } = theme

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
            <Landing className="fadeIn">
              <h1>Hi, my name is</h1>
              <h2>Trinh Phuc Thinh</h2>
              <h3>I build things for the web.</h3>
              <p>I’m a software engineer specializing in Web developer</p>
            </Landing>
            <About className="fadeIn"></About>
            <Experiences></Experiences>
            <Work></Work>
            <StyledContact id="contact" className="fadeIn">
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
            </StyledContact>
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
