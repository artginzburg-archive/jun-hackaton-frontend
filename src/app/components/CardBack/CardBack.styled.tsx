import { styled } from '@linaria/react';

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: white;
  border-radius: 20%;
  transition: 0.3s;
  border-radius: 5%;
  //border: 1px solid grey;
`;
