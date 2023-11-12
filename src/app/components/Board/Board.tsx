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
        {cards.map((card, index) => (
          <Card
            key={index}
            data={card}
            rotated={
              currentRotatedCards.first?.index === card.index ||
              currentRotatedCards.second?.index === card.index ||
              !!card.guessed
            }
            success={
              currentRotatedCards.first !== undefined &&
              currentRotatedCards.first.id === currentRotatedCards.second?.id &&
              currentRotatedCards.first.id === card.id
            }
            error={
              currentRotatedCards.first !== undefined &&
              currentRotatedCards.second !== undefined &&
              currentRotatedCards.first.id !== currentRotatedCards.second.id &&
              (currentRotatedCards.first.index === card.index ||
                currentRotatedCards.second.index === card.index)
            }
            onClick={onCardClick}
          />
        ))}
      </BoardContainer>
      <EndGame />
    </>
  );
}
