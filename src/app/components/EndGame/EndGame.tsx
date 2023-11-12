import { EndGameContainer, Heading2 } from './EndGame.styled';
import { FaChildReaching, FaPeopleRoof } from 'react-icons/fa6';
export default function EndGame() {
  return (
    <EndGameContainer>
      <Heading2>Поздравляем, это победа!</Heading2>
      <Heading2>Вы нашли своего малыша.💚</Heading2>
      {/* <FaChildReaching size={60} /> */}
      <FaPeopleRoof size={60} color="rgba(255, 99, 71, 0.5)" />
    </EndGameContainer>
  );
}
