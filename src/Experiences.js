import React from 'react'
import { StyledExperiences } from './styled/Section'
import styled from 'styled-components'
import theme from './styled/theme'
const { colors, transition, fontSizes, fonts, medias } = theme

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Skills } from './styled/globalStyle'
const StyledTabs = styled(Tabs)`
  display: flex;
  min-height: 340px;

  @media (max-width: ${medias.xs}) {
    flex-direction: column;
  }
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

  @media (max-width: ${medias.xs}) {
    border-bottom: 2px solid ${colors.lightestNavy};
    border-left: none;
    width: var(--tab-width);
  }
`

const StyledTabList = styled(TabList)`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: ${medias.xs}) {
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
  }
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

  @media (max-width: ${medias.xs}) {
    top: calc(var(--tab-height) - 2px);
    height: 2px;
    width: var(--tab-width);
    transform: translateX(calc(var(--tab-index) * var(--tab-width)));
  }
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

  @media (max-width: ${medias.xs}) {
    &.react-tabs__tab-panel--selected {
      margin-left: 0;
    }
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
const Experiences = () => {
  return (
    <StyledExperiences id="experience" className="fadeIn">
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
              Worked closely with designers and management team to develop the
              CMIS (business process management information system) website
              using Angular, and Bootstrap, MVC Architecture Parttern, MySql
            </li>
            <li>
              Manually tested sites in various browsers and mobile devices to
              ensure cross-browser compatibility and responsiveness
            </li>
            <li>
              Engineered and maintained old version of CMIS (MIS) code for
              client using C# WinForms MVC Pattern, MySql
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
              Developed and maintained code for in-house websites primarily
              using HTML, CSS, JavaScript, and jQuery
            </li>
            <li>
              Manually tested sites in various browsers and mobile devices to
              ensure cross-browser compatibility and responsiveness
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
    </StyledExperiences>
  )
}

export default Experiences
