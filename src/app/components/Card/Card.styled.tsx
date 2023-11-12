import { styled } from '@linaria/react';
import { CardBack } from '../CardBack/CardBack.styled';
import { CardFront } from '../CardFront/CardFront.styled';

export const CardContainer = styled.div<{
  'data-rotated'?: boolean;
  'data-success'?: boolean;
  'data-error'?: boolean;
}>`
  position: relative;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  /* height: 24%; */
  height: 100%;
  /* width: 24%; */
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s linear;

  // &[data-rotated='true'] {
  //   background-color: rgba(255, 99, 71, 0.8);
  //   color: black;
  // }

  &[data-rotated='true'] {
    ${CardFront} {
      background-color: rgba(255, 99, 71, 0.5);
      box-shadow: 5px 8px 15px 10px rgba(234, 187, 122, 0.2);
      transform: perspective(600px) rotateY(-180deg);
    }

    ${CardBack} {
      box-shadow: 5px 8px 15px 10px rgba(234, 187, 122, 0.2);
      transform: perspective(600px) rotateY(0deg);
    }
  }

  @keyframes animateCardYes {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.5rem);
    }
    70% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes animateCardNo {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(0.5rem) skewX(10deg);
    }
    70% {
      transform: translateX(-0.5rem) skewX(-10deg);
    }
    100% {
      transform: translateX(0);
    }
  }

  &[data-success='true'] {
    ${CardBack} {
      background: #45a148;
      animation: animateCardYes 2s infinite;
    }
  }
  &[data-error='true'] {
    ${CardBack} {
      background: #ff6347;
      animation: animateCardNo 2s infinite;
    }
  }
`;
