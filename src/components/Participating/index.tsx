import { Check } from '@phosphor-icons/react';
import { Circle, Container, Numbers } from './styles';

type ParticipatingProps = {
  number: string;
  title: string;
};

export function Participating({
  number = '0',
  title = 'participantes',
}: ParticipatingProps) {
  return (
    <Container>
      <Circle>
        <Check size={16} color='white' />
      </Circle>
      <span>
        <Numbers>{number}</Numbers>
        {title}
      </span>
    </Container>
  );
}
