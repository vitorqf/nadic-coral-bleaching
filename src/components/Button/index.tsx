import { Container } from './styles';
import { Icon } from '@phosphor-icons/react';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'ghost';
  LeftIcon?: Icon;
  RightIcon?: Icon;
  text: string;
  fillContainer?: boolean;
};

export function Button({
  type = 'primary',
  LeftIcon,
  RightIcon,
  text = 'button',
  fillContainer = false,
}: ButtonProps) {
  return (
    <Container $type={type} $fillContainer={fillContainer}>
      {LeftIcon && <LeftIcon size={16} color='#fff' weight='bold' />}
      {text}
      {RightIcon && <RightIcon size={16} color='#fff' weight='bold' />}
    </Container>
  );
}
