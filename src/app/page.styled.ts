import { css } from '@linaria/core'
import { styled } from '@linaria/react'

import { media } from './utils/media-queries'

const transitionDurationDefault = '200ms'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`

export const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
  }

  ${media.mobileStyle} {
    font-size: 0.8rem;

    a {
      padding: 1rem;
    }

    p,
    div {
      display: flex;
      justify-content: center;
      position: fixed;
      width: 100%;
    }

    p {
      align-items: center;
      inset: 0 0 auto;
      padding: 2rem 1rem 1.4rem;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
      background: linear-gradient(
        to bottom,
        rgba(var(--background-start-rgb), 1),
        rgba(var(--callout-rgb), 0.5)
      );
      background-clip: padding-box;
      backdrop-filter: blur(24px);
    }

    div {
      align-items: flex-end;
      pointer-events: none;
      inset: auto 0 0;
      padding: 2rem;
      height: 200px;
      background: linear-gradient(to bottom, transparent 0%, rgb(var(--background-end-rgb)) 40%);
      z-index: 1;
    }
  }
`

export const Code = styled.code`
  font-weight: 700;
  font-family: var(--font-mono);
`

function getGridTemplateColumnsMinMax(numColumns: number) {
  return `repeat(${numColumns}, minmax(${100 / numColumns}%, auto))`;
}
function getGridTemplateColumnsRepeat(numColumns: number) {
  return `repear(${numColumns}, ${100 / numColumns}%)`;
}

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${getGridTemplateColumnsMinMax(4)};
  width: var(--max-width);
  max-width: 100%;

  ${media.mobileStyle} {
    grid-template-columns: 1fr;
    margin-bottom: 120px;
    max-width: 320px;
    text-align: center;
  }

  ${media.tabletAndSmallerDesktopStyle} {
    grid-template-columns: ${getGridTemplateColumnsRepeat(2)};
  }
`

export const Card = styled.a`
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition: background ${transitionDurationDefault}, border ${transitionDurationDefault};

  span {
    display: inline-block;
    transition: transform ${transitionDurationDefault};
  }

  h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
  }

  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
  }

  ${media.hoverNonTouch} {
    :hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);

      span {
        transform: translateX(4px);
      }
    }
  }

  ${media.prefersReducedMotion} {
    :hover span {
      transform: none;
    }
  }

  ${media.mobileStyle} {
    padding: 1rem 2.5rem;

    h2 {
      margin-bottom: 0.5rem;
    }
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;

  ::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  ::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }

  ::before,
  ::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }

  ${media.mobileStyle} {
    padding: 8rem 0 6rem;

    ::before {
      transform: none;
      height: 300px;
    }
  }
`

export const logo = css`
  position: relative;

  ${media.prefersColorSchemeDark} {
    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
  }
`

export const vercelLogo = css`
  ${media.prefersColorSchemeDark} {
    filter: invert(1);
  }
`
