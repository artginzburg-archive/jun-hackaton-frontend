import React, { useState } from 'react';
import { CounterContainer } from './Counter.styled';

type CounterProps = {
  currentMoveCount: number;
};

export default function Counter({ currentMoveCount }: CounterProps) {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <CounterContainer>
      <div onClick={inc}> {count} moves</div>
    </CounterContainer>
  );
}
