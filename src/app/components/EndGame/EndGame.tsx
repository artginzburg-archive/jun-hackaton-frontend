import Restart from '../Restart/Restart';
import { EndGameContainer, Heading2 } from './EndGame.styled';
import { FaPeopleRoof } from 'react-icons/fa6';
export default function EndGame({ restart }: { restart: () => void }) {
  return (
    <EndGameContainer>
      <Heading2>Поздравляем!</Heading2>
      <Heading2>Каждый ребенок нашел свою семью.💚</Heading2>
      {/* <FaChildReaching size={60} /> */}
      <FaPeopleRoof size={60} color="rgba(255, 99, 71, 0.5)" />
      <button
        onClick={restart}
        style={{
          fontSize: '2rem',
          width: '100%',
          background: 'transparent',
          outline: 'none',
          border: 'none'
        }}
      >
        Заново <Restart onClick={() => {}} />
      </button>
    </EndGameContainer>
  );
}
