import { CardContainer } from './Card.styled';
import { CardBack } from '../CardBack/CardBack.styled';
import { CardFront } from '../CardFront/CardFront.styled';
import { CardData } from '../Game/Game';
import { FaChildReaching, FaPeopleRoof } from 'react-icons/fa6';

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
      <CardBack>
        {data.isCloned ? (
          <FaChildReaching size={'50%'} color={data.image} />
        ) : (
          <FaPeopleRoof size={'50%'} color={data.image} />
        )}
        <div style={{ opacity: 0, width: 0, height: 0 }}>{data.image}</div>
      </CardBack>
    </CardContainer>
  );
}
