import styled from 'styled-components'
import theme from './theme'
const { colors } = theme

export const StartLogoContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${colors.darkNavy};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: changeColor 0.3s ease-in-out forwards;
  animation-delay: 1.7s;

  @keyframes changeColor {
    0% {
      background-color: ${colors.darkNavy};
    }
    100% {
      background-color: ${colors.navy};
    }
  }
`

export const StartLogo = styled.div`
  background-color: ${colors.darkNavy};
  position: relative;
  width: 300px;
  height: 300px;
  transform: scale(1);
  animation: fadeout 0.3s cubic-bezier(0, 0.23, 0.58, 1) forwards;
  animation-delay: 1.7s;

  ::after,
  ::before {
    content: '';
    position: absolute;
    height: 20px;
    width: 100%;
    display: block;
    background-color: ${colors.darkNavy};
    z-index: 1000;
  }

  ::before {
    top: 0;
    left: 0;
  }
  ::after {
    bottom: 0;
    left: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 25px;
    background-color: ${colors.green};
    transform-origin: left;
    transform: scaleX(0);
    animation: animate 0.5s forwards;
    animation-timing-function: linear;
  }

  span:nth-child(1) {
    transform: rotate(270deg);
  }

  span:nth-child(2) {
    transform: rotate(135deg) translate(-33px, 196px);
    width: 72%;
  }

  span:nth-child(3) {
    transform: rotate(45deg) translate(33px, 194px);
    width: 72%;
  }
  span:nth-child(4) {
    transform: rotate(116deg) translate(23px, 81px);
    width: 72%;
  }
  span:nth-child(5) {
    transform: rotate(241deg) translate(-99px, 228px);
    width: 72%;
  }
  span:nth-child(6) {
    transform: translate(172px, 196px);
    width: 26%;
    animation-timing-function: cubic-bezier(0, 0, 0.09, 0.54);
  }

  span:nth-child(2):before {
    animation-delay: 0.5s;
  }
  span:nth-child(3):before {
    animation-delay: 1s;
  }

  span:nth-child(4):before {
    animation-delay: 0.5s;
  }
  span:nth-child(6):before {
    animation-delay: 1s;
  }

  @keyframes animate {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  @keyframes fadeout {
    0% {
      transform: scale(1);
    }

    20% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(0);
    }
  }
`

export const TransparentLine = styled.div`
  width: 20%;
  height: 20px;
  background-color: ${colors.darkNavy};
  display: block;
  position: absolute;
  top: 91px;
  right: 70px;
  z-index: 11;
`
