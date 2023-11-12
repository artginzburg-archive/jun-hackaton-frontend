'use client';
import Board from '../Board/Board';
import { useState } from 'react';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import { GameContainer } from './Game.styled';
import EndGame from '../EndGame/EndGame';

export type CardData = {
  /** a.k.a. rotated */
  guessed?: boolean;
  id: number;
  image: string;
  index: number;
  isCloned: boolean;
};

function generateCards(cardCount: number): CardData[] {
  const contentArr = shuffleAndGetContentArr(cardCount);

  return contentArr.map((data, index) => ({ ...data, index }));
}

const potentialContent = [
  '#477817',
  '#3546e5',
  '#a8e38d',
  '#fc60d0',
  '#f0bf46',
  '#45a5ff',
  '#f77463',
  '#ab2aad',
  '#97b584',
  '#6beded',
  '#24e04d',
  '#310c96',
  '#073d06',
  '#ffb36b',
  '#10427a',
  '#f571e8',
  '#134dbf',
  '#4b48f0'
];

function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function shuffleAndGetContentArr(count: number) {
  const shuffled: Omit<CardData, 'index'>[] = shuffleArray([
    ...potentialContent
  ])
    .slice(0, count / 2)
    .map((contentEl, id) => ({ image: contentEl, id, isCloned: false }));
  return shuffleArray([
    ...shuffled,
    ...shuffled.map(data => ({ ...data, isCloned: true }))
  ]);
}

export type CurrentRotatedCards = {
  first?: CardData;
  second?: CardData;
};

export default function Game() {
  const [boardSize, setBoardSize] = useState(4);
  const cardCount = boardSize ** 2;
  const [isAnimating, setAnimating] = useState(false);
  const [currentMoveCount, setCurrentMoveCount] = useState(0);
  const [currentRotatedCards, setCurrentRotatedCards] =
    useState<CurrentRotatedCards>({});
  const [hasWon, setHasWon] = useState(false);

  const [currentCards, setCurrentCards] = useState(generateCards(cardCount));

  function onCardClick(card: CardData) {
    if (card.guessed) return;
    if (isAnimating === true) return;
    if (card.index === currentRotatedCards.first?.index) return;

    if (currentRotatedCards.first) {
      setCurrentRotatedCards({ ...currentRotatedCards, second: card });

      setCurrentMoveCount(prev => prev + 1);

      if (card.id === currentRotatedCards.first.id) {
        // Совпадение!
        const newCurrentCards = currentCards.map(c =>
          c.id === card.id ? { ...c, guessed: true } : c
        );
        setCurrentCards(newCurrentCards);

        if (newCurrentCards.every(card => card.guessed)) {
          win();
        }
      }

      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);

        setCurrentRotatedCards({});
      }, 500);

      return;
    }

    setCurrentRotatedCards({ ...currentRotatedCards, first: card });
  }

  function win() {
    setHasWon(true);
  }
  function restart() {
    setCurrentMoveCount(0);
    setCurrentRotatedCards({});
    setCurrentCards(generateCards(cardCount));
    setHasWon(false);
  }

  if (hasWon) {
    return <EndGame />;
  }

  return (
    <GameContainer>
      <ButtonsBlock
        restartClick={restart}
        currentMoveCount={currentMoveCount}
      />
      <Board
        cards={currentCards}
        currentRotatedCards={currentRotatedCards}
        onCardClick={onCardClick}
        boardSize={boardSize}
      />
    </GameContainer>
  );
}
