import { styled } from '@linaria/react';

export const BoardContainer = styled.div`
  position: relative;
  display: flex;
  /*display: grid;
  grid-template-columns: repeat(1fr, 30vw);
  grid-template-rows: 30vw;
  grid-gap: 2.5vw;
  padding: 2.5vw;*/
  //grid-template-columns: 150px auto 40%;
  //grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 1%;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 600px;
  height: 600px;
  border: 2px dotted #ffdead;
  border-radius: 5%;
  box-shadow: 5px 8px 15px 10px rgba(234, 187, 122, 0.2);
  padding: 15px;
  // :hover {
  //   background: rgba(var(--card-rgb), 0.1);
  //   border: 1px solid rgba(var(--card-border-rgb), 0.15);
  // }
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
