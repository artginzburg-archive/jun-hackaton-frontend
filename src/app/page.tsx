import { Main, Heading1 } from './page.styled';
import Game from './components/Game/Game';

export default function Home() {
  return (
    <Main>
      <Heading1>Memory Game</Heading1>
      <Game />
    </Main>
  );
}
