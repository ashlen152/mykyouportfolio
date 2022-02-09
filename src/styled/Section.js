import styled from 'styled-components'
import theme from './theme'
const { colors, fontSizes, medias } = theme

export const Main = styled.div`
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

export const Section = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Landing = styled(Section)`
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
export const StyledAbout = styled(Section)`
  padding: 100px 0;
  max-width: 900px;
  min-height: fit-content;
  h2 {
    font-size: clamp(18px, 4vw, ${fontSizes.xxl});
    display: flex;
    align-items: center;
    padding: 10px 0px 40px;
    white-space: nowrap;
    width: 100%;
  }

  h2::before {
    content: '';
    display: block;
    color: ${colors.green};
    counter-increment: section;
    content: '0' counter(section) '.';
    font-size: clamp(14px, 3vw, ${fontSizes.lg});
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

  @media (max-width: ${medias.xs}) {
    h2::after {
      width: 100%;
    }
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
export const StyledExperiences = styled(StyledAbout)``

export const StyledContact = styled(StyledAbout)`
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

export const StyledWork = styled(StyledAbout)`
  & > ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  & > ul > li {
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
      transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  & > ul > li:not(:last-of-type) {
    margin-bottom: 100px;
  }

  & > ul > li:nth-of-type(2n + 1) > div:first-child {
    grid-column: 7 / -1;
    text-align: right;

    & > ul {
      justify-content: flex-end;
      & > li {
        margin: 0px 0px 5px 20px;
      }
    }

    @media (max-width: ${medias.sm}) {
      grid-column: 5 / -1;
    }

    @media (max-width: ${medias.xs}) {
      grid-column: 1 / -1;
      text-align: left;
      & > ul {
        justify-content: flex-start;
        & > li {
          margin: 0px 20px 0px 0px;
        }
      }
    }
  }

  & > ul > li:nth-of-type(2n + 1) > div:last-child {
    grid-column: 1 / 8;
    @media (max-width: ${medias.xs}) {
      grid-column: 1 / -1;
    }
  }
`
