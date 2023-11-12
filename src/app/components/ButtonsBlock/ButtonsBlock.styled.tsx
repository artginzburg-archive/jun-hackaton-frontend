import { styled } from '@linaria/react';

export const ButtonsBlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 0.5rem 0.3rem;
  font-size: calc(1rem + 6 * (100vw - 320px) / 880);
`;
