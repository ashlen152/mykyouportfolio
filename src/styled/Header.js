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
  }

  @media (max-width: ${medias.xs}) {
    padding: 0px 25px;
  }

  img,
  > ol > li {
    transition: ${transition};
    opacity: 0;
  }

  > * .fadeIn {
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

  > ol > li {
    text-decoration: none;
    padding: 10px;
    transform: translateY(-25px);
  }

  > ol > li:nth-child(2) {
    transition-delay: 100ms;
  }

  > ol > li:nth-child(3) {
    transition-delay: 200ms;
  }

  > ol > li:nth-child(4) {
    transition-delay: 300ms;
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
  }
`
