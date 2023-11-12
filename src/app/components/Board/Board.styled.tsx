import { styled } from '@linaria/react';

export const BoardContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  background-color: #ffdca1;
  /* width: 400px; */
  /* max-width: 90vw; */
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: 1%;
  padding: 0.5rem;
  // :hover {
  //   background: rgba(var(--card-rgb), 0.1);
  //   border: 1px solid rgba(var(--card-border-rgb), 0.15);
  // }
  display: grid;
  grid-template-columns: repeat(var(--boardSize), 1fr);
`;
