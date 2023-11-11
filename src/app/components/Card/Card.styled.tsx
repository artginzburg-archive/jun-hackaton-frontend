import { styled } from '@linaria/react';
import { CardBack } from '../CardBack/CardBack.styled';
import { CardFront } from '../CardFront/CardFront.styled';

export const CardContainer = styled.div<{ 'data-rotated'?: boolean }>`
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
      background: rgba(255, 99, 71, 1);
      box-shadow: 5px 8px 15px 10px rgba(234, 187, 122, 0.2);
      transform: perspective(600px) rotateY(0deg);
    }
  }
  &[match='true'] {
  }
`;
