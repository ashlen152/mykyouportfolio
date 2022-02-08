import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const { colors, fontSizes, fonts } = theme

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Medium'), local('CircularStd-Medium'),
    url('../fonts/CircularStd-Medium.woff2') format('woff2'),
    url('../fonts/CircularStd-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Book'), local('CircularStd-Book'),
    url('../fonts/CircularStd-Book.woff2') format('woff2'),
    url('../fonts/CircularStd-Book.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Medium Italic'), local('CircularStd-MediumItalic'),
    url('../fonts/CircularStd-MediumItalic.woff2') format('woff2'),
    url('../fonts/CircularStd-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Black'), local('CircularStd-Black'),
    url('../fonts/CircularStd-Black.woff2') format('woff2'),
    url('../fonts/CircularStd-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Bold'), local('CircularStd-Bold'),
    url('../fonts/CircularStd-Bold.woff2') format('woff2'),
    url('../fonts/CircularStd-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Bold Italic'), local('CircularStd-BoldItalic'),
    url('../fonts/CircularStd-BoldItalic.woff2') format('woff2'),
    url('../fonts/CircularStd-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Book Italic'), local('CircularStd-BookItalic'),
    url('../fonts/CircularStd-BookItalic.woff2') format('woff2'),
    url('../fonts/CircularStd-BookItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Circular Std';
    src: local('Circular Std Black Italic'), local('CircularStd-BlackItalic'),
    url('../fonts/CircularStd-BlackItalic.woff2') format('woff2'),
    url('../fonts/CircularStd-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    scroll-behavior: smooth;
  }
  html,
  body {
    height: 100vh;
  }
  
  body {
    margin:0;
    padding: 0;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    background-color: ${colors.navy};
    color: ${colors.slate};
    letter-spacing: 1px;
    line-height: 1.4;
  }
  h1 {
    color: ${colors.green};
    font-size: ${fontSizes.md};
    font-weight: 500;
    width: 100%;
  }

  h2 {
    margin: 0;
    color: ${colors.lightestSlate};
    font-size: clamp(28px, 6vw, 70px);
  }

  h3 {
    margin: 0;
    color: ${colors.slate};
    font-size: clamp(28px, 6vw, 70px);
  }
  .fadeIn {
    opacity: 100;
  }
  .blur {
    filter: blur(5px) brightness(0.7);
    transition: var(--transition);
    pointer-events: none;
    user-select: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    /* border-radius: 100px; */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${colors.navy};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: hsl(225, 20%, 30%);
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.slate};
  }

  :root {
  --tab-height: 50px;
  --border-radius: 5px;
  --nav-scroll-height: 100px;
}


@keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    60% {
      opacity: 100;
    }
    100% {
      opacity: 100;
      transform: translateY(0);
    }
  }
`

export default GlobalStyled
