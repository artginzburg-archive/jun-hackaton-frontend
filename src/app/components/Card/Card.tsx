import { CardContainer } from './Card.styled';
import { CardBack } from '../CardBack/CardBack.styled';
import { CardFront } from '../CardFront/CardFront.styled';
import { CardData } from '../Game/Game';

export default function Card({
  data,
  rotated,
  onClick,
  success,
  error
}: {
  data: CardData;
  rotated: boolean;
  onClick: (data: CardData) => void;
  success: boolean;
  error: boolean;
}) {
  return (
    <CardContainer
      data-rotated={rotated}
      data-success={success}
      data-error={error}
      onClick={() => onClick(data)}
    >
      <CardFront />
      <CardBack>{data.image}</CardBack>
    </CardContainer>
  );
}
