'use client';
import Board from '../Board/Board';
import { useState } from 'react';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import { GameContainer } from './Game.styled';

export type CardData = {
  /** a.k.a. rotated */
  guessed?: boolean;
  id: number;
  image: string;
  index: number;
};

// функция, которая из массива перемешанного и обрезанного контента делает массив CardData (по сути просто arr.map())
function generateCards(cardCount: number): CardData[] {
  const contentArr = shuffleAndGetContentArr(cardCount);
  // А здесь получается маппим, делаем {image: contentEl, id: }; id походу тут каунтер просто делаем, по умолчанию 0, в конце каждого мэпа +1

  return contentArr.map((data, index) => ({ ...data, index }));
}

// массив с потенциальным контентом
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

/** T — это дженерик, это как у функций есть параметры, у типов дженерики */
function shuffleArray<T>(arr: T[]): T[] {
  // копирует массив, сортирует рандомно (Math.random() даёт от 0 до 1, поэтому если отнять 0.5 — будет от -0.5 до +0.5)
  return [...arr].sort(() => Math.random() - 0.5);
}

// функция, которая принимает в себя кол-во карточек X как цифру, копирует весь массив с потенциальным контентом, перемешивает его через функцию а-ля shuffleArray, и возвращает первые X карточек из перемешанного массива

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

  const [currentCards, setCurrentCards] = useState(generateCards(cardCount));

  function onCardClick(card: CardData) {
    if (isAnimating === true) return;
    if (card.index === currentRotatedCards.first?.index) return;

    if (currentRotatedCards.first) {
      setCurrentRotatedCards({ ...currentRotatedCards, second: card });

      setCurrentMoveCount(prev => prev + 1);

      if (card.id === currentRotatedCards.first.id) {
        // Совпадение!
        setCurrentCards(prev =>
          prev.map(c => (c.id === card.id ? { ...c, guessed: true } : c))
        );
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

  function win() {}
  function restart() {
    setCurrentMoveCount(0);
    setCurrentRotatedCards({});
    setCurrentCards(generateCards(cardCount));
  }
  // function lose() {
  //   // кажется lose пока не бывает :)
  // }

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
