import { FaRotateRight } from 'react-icons/fa6';
import { RestartContainer } from './Restart.styled';

export type RestartProps = {
  onClick: () => void;
};

export default function Restart({ onClick }: RestartProps) {
  return (
    <RestartContainer onClick={onClick}>
      <FaRotateRight />
    </RestartContainer>
  );
}
