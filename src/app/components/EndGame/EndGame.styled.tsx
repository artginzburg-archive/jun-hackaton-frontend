import { styled } from '@linaria/react';

export const EndGameContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccffe0;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border: 3px dotted #14b554;
  border-radius: 5%;
  box-shadow: 5px 8px 15px 10px rgba(234, 187, 122, 0.2);
  background: rgb(255, 222, 173);
  background: rgb(255, 222, 173);
  background: linear-gradient(
    346deg,
    rgba(255, 222, 173, 1) 0%,
    rgba(204, 255, 224, 1) 52%,
    rgba(237, 149, 97, 1) 100%
  );
`;

export const Heading2 = styled.h2`
  font-weight: 600;
  margin-bottom: 0.7rem;
  color: #088539;
  text-shadow: 2px 2px 2px #14b554;
  text-align: center;
`;
