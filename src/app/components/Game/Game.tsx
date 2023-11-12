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
};

function generateCards(cardCount: number): CardData[] {
  const contentArr = shuffleAndGetContentArr(cardCount);

  return contentArr.map((data, index) => ({ ...data, index }));
}

const potentialContent = [
  'X',
  'Y',
  'Z',
  'A',
  'B',
  'C',
  'K',
  'H',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '10',
  'hi',
  'love'
];

function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function shuffleAndGetContentArr(count: number) {
  const shuffled: Omit<CardData, 'index'>[] = shuffleArray([
    ...potentialContent
  ])
    .slice(0, count / 2)
    .map((contentEl, id) => ({ image: contentEl, id }));
  return shuffleArray([...shuffled, ...shuffled]);
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
