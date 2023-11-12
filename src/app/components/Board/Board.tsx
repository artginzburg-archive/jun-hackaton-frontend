import { BoardContainer } from './Board.styled';
import EndGame from '../EndGame/EndGame';
import Card from '../Card/Card';
import type { CardData, CurrentRotatedCards } from '../Game/Game';

export default function Board({
  cards,
  currentRotatedCards,
  onCardClick,
  boardSize
}: {
  cards: CardData[];
  currentRotatedCards: CurrentRotatedCards;
  onCardClick: (data: CardData) => void;
  boardSize: number;
}) {
  return (
    <>
      <BoardContainer
        style={{
          // @ts-expect-error custom property
          '--boardSize': boardSize
        }}
      >
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            rotated={
              currentRotatedCards?.first === card.id ||
              currentRotatedCards?.second === card.id
            }
            success={
              currentRotatedCards.first &&
              currentRotatedCards.first === currentRotatedCards.second
                ? true
                : false
            }
            error={
              currentRotatedCards.first &&
              currentRotatedCards.first !== currentRotatedCards.second
                ? true
                : false
            }
            onClick={onCardClick}
          />
        ))}
      </BoardContainer>
      <EndGame />
    </>
  );
}
