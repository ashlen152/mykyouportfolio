import styled from 'styled-components'
import theme from './theme'
const { colors, transition, fontSizes, medias } = theme
export const Header = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: var(--nav-scroll-height);
  align-items: center;
  padding: 0px 50px;
  z-index: 1001;
  transition: ${transition};

  &.fadeOut {
    transform: translateY(calc(var(--nav-scroll-height) * -1));
  }

  &.fixed {
    background-color: rgba(10, 25, 47, 0.85);
    box-shadow: 0 10px 30px -10px hsla(218, 64%, 7%, 70%);
    height: 70px;
  }

  @media (max-width: ${medias.xs}) {
    padding: 0px 25px;
  }

  & > div > img.fadeIn,
  & > ol > li.fadeIn {
    opacity: 0;
    transition: ${transition};
    transform: translateY(-25px);
  }
  & > div > img.fadeIn.active,
  & > ol > li.fadeIn.active {
    opacity: 100;
    transform: translateY(0);
  }

  > ol {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    counter-reset: section;
    @media (max-width: ${medias.xs}) {
      display: none;
    }
  }

  & > div > img.fadeIn.active {
    transition-delay: 100ms;
  }

  > ol > li {
    text-decoration: none;
    padding: 10px;
  }

  > ol > li:nth-child(1) {
    transition-delay: 200ms;
  }

  > ol > li:nth-child(2) {
    transition-delay: 300ms;
  }

  > ol > li:nth-child(3) {
    transition-delay: 400ms;
  }

  > ol > li:nth-child(4) {
    transition-delay: 500ms;
  }

  > ol > li > a::before {
    counter-increment: section;
    content: '0' counter(section) '.';
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    text-align: right;
    padding-right: 5px;
    transition-delay: calc(counter(section) * 100);
  }

  > ol > li > a {
    text-decoration: none;
    color: ${colors.lightestSlate};
    font-size: ${fontSizes.base};
    transition: ${transition};
  }

  > ol > li > a:hover {
    color: ${colors.green};
  }
`

export const Logo = styled.div`
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`
export const SidePage = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  bottom: 0;
  color: ${colors.lightSlate};

  ::after {
    margin-top: 10px;
    content: '';
    height: 90px;
    width: 1px;
    background-color: ${colors.lightSlate};
  }

  ul,
  ul > li,
  ul > li > a,
  > a {
    text-decoration: none;
    list-style: none;
    color: inherit;
  }

  &.fadeIn {
    opacity: 0;
    transition: ${transition};
  }
  &.fadeIn.active {
    opacity: 1;
  }

  @media (max-width: ${medias.xs}) {
    display: none;
  }
`

export const SidePageLeft = styled(SidePage)`
  left: 40px;
  &.fadeIn.active {
    transition-delay: 1200ms;
  }
  @media (max-width: ${medias.sm}) {
    left: 20px;
  }
`
export const SidePageRight = styled(SidePage)`
  right: 40px;
  width: 40px;
  &.fadeIn.active {
    transition-delay: 1300ms;
  }

  > a {
    transition: ${transition};
    color: inherit;
    writing-mode: vertical-rl;
    letter-spacing: 4px;
    font-size: ${fontSizes.sm};
  }

  > a:hover {
    color: ${colors.green};
    transform: translateY(-5px) scale(1.1, 1.1);
  }

  @media (max-width: ${medias.sm}) {
    right: 20px;
  }
`
export const SocialList = styled.ul`
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;

  > li {
    margin-bottom: 20px;
  }

  > li:last-child {
    margin-bottom: 0;
  }

  > li > a > svg {
    color: inherit;
    width: 20px;
    height: 20px;
    transition: ${transition};
  }

  > li > a > svg:hover {
    color: ${colors.green};
    transform: translateY(-5px) scale(1.1, 1.1);
  }
`

export const HambergerContainer = styled.div`
  display: none;
  @media (max-width: ${medias.xs}) {
    display: block;
  }
  z-index: 1001;
`

export const HambergerButton = styled.button`
  transition: ${transition};
  transition-delay: 200ms;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &.fadeIn {
    opacity: 0;
    transform: translateY(-25px);
  }
  &.fadeIn.active {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const HambergerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 30px;
  position: relative;
`

export const HambergerInner = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.green};
  transition: transform 0.22s ease-in-out;
  transform: rotate(0deg);

  &.active {
    transform: rotate(225deg);
  }

  ::before {
    width: 120%;
    content: '';
    height: 2px;
    background-color: ${colors.green};
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.22s ease-in-out;
    transform: rotate(0deg) translateY(-10px);
  }

  &.active::before {
    width: 100%;
    transform: rotate(90deg) translateY(0);
  }

  ::after {
    content: '';
    height: 2px;
    width: 80%;
    background-color: ${colors.green};
    position: absolute;
    bottom: 0;
    right: 0;
    transition: transform 0.22s ease-in-out;
    transform: rotate(0deg) translateY(10px);
  }

  &.active::after {
    width: 100%;
    transform: rotate(90deg) translateY(0);
  }
`

export const Navbar = styled.div`
  position: absolute;
  top: 0;
  right: calc(-1 * min(75vw, 400px));
  background-color: ${colors.lightNavy};
  width: min(75vw, 400px);
  height: 100vh;
  transition: right 0.5s ease-in-out;
  z-index: 1000;
  counter-reset: section;

  &.active {
    right: 0;
  }

  > ol,
  > ol > li,
  > ol > li > a {
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  > ol {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  > ol > li {
    padding-bottom: 35px;
    width: 100%;
    text-align: center;
  }

  > ol > li > a {
    font-size: ${fontSizes.md};
    color: ${colors.lightestSlate};
    transition: ${transition};

    ::before {
      display: block;
      content: '';
      color: ${colors.green};
      counter-increment: section;
      content: '0' counter(section) '.';
      padding-bottom: 3px;
    }

    :hover {
      color: ${colors.green};
    }
  }
`
