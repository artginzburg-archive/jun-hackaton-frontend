import { styled } from '@linaria/react';

export const RestartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  transition: 0.3s;
  &:hover {
    transform: rotate(180deg);
  }
`;
