import { CounterContainer } from './Counter.styled';

type CounterProps = {
  currentMoveCount: number;
};

export default function Counter({ currentMoveCount }: CounterProps) {
  return (
    <CounterContainer>
      <div> {currentMoveCount} moves</div>
    </CounterContainer>
  );
}
