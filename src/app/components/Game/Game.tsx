'use client';
import Board from '../Board/Board';
import { useState } from 'react';
import { GameContainer } from './Game.styled';

export type CardData = {
  /** a.k.a. rotated */
  guessed?: boolean;
  id: number;
  image: string;
};

// функция, которая из массива перемешанного и обрезанного контента делает массив CardData (по сути просто arr.map())
function generateCards(cardCount: number): CardData[] {
  const contentArr = shuffleAndGetContentArr(cardCount);
  // А здесь получается маппим, делаем {image: contentEl, id: }; id походу тут каунтер просто делаем, по умолчанию 0, в конце каждого мэпа +1
  let counter = 0;

  return contentArr.map(contentEl => ({
    image: contentEl,
    id: counter++
  }));
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
]; // ну вот контент

/** T — это дженерик, это как у функций есть параметры, у типов дженерики */
function shuffleArray<T>(arr: T[]): T[] {
  // копирует массив, сортирует рандомно (Math.random() даёт от 0 до 1, поэтому если отнять 0.5 — будет от -0.5 до +0.5)
  return [...arr].sort(() => Math.random() - 0.5);
}

// функция, которая принимает в себя кол-во карточек X как цифру, копирует весь массив с потенциальным контентом, перемешивает его через функцию а-ля shuffleArray, и возвращает первые X карточек из перемешанного массива

function shuffleAndGetContentArr(count: number) {
  const shuffled = shuffleArray([...potentialContent]).slice(0, count / 2);
  return shuffleArray([...shuffled, ...shuffled]);
}

export type CurrentRotatedCards = {
  first?: CardData['id'];
  second?: CardData['id'];
};

export default function Game() {
  const [boardSize, setBoardSize] = useState(4);
  const cardCount = boardSize ** 2;

  const [currentMoveCount, setCurrentMoveCount] = useState(0);
  const [currentRotatedCards, setCurrentRotatedCards] =
    useState<CurrentRotatedCards>({});

  const [currentCards, setCurrentCards] = useState(generateCards(cardCount));

  function onCardClick(card: CardData) {
    if (currentRotatedCards.first) {
      setCurrentRotatedCards(prev => ({ ...prev, second: card.id }));
      return;
    }
    setCurrentRotatedCards(prev => ({ ...prev, first: card.id }));
    // работает, получается
  }

  function win() {}
  function restart() {}
  // function lose() {
  //   // кажется lose пока не бывает :)
  // }
  return (
    <GameContainer>
      <Board
        cards={currentCards}
        currentRotatedCards={currentRotatedCards}
        onCardClick={onCardClick}
        boardSize={boardSize}
      />
    </GameContainer>
  );
}
