import { ButtonsBlockContainer } from './ButtonsBlock.styled';
import Counter from '../Counter/Counter';
import Restart from '../Restart/Restart';

export type ButtonsBlockProps = {
  restartClick: () => void;
  currentMoveCount: number;
};

export default function ButtonsBlock({
  restartClick,
  currentMoveCount
}: ButtonsBlockProps) {
  return (
    <ButtonsBlockContainer>
      <Counter currentMoveCount={currentMoveCount} />
      <Restart onClick={restartClick} />
    </ButtonsBlockContainer>
  );
}
