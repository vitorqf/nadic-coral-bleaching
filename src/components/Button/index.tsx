import { Container } from './styles';
import { Icon } from '@phosphor-icons/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  LeftIcon?: Icon;
  RightIcon?: Icon;
  text: string;
  fillContainer?: boolean;
}

export function Button({
  variant = 'primary',
  LeftIcon,
  RightIcon,
  text = 'button',
  fillContainer = false,
  ...rest
}: ButtonProps) {
  return (
    <Container $variant={variant} $fillContainer={fillContainer} {...rest}>
      {LeftIcon && <LeftIcon size={16} color='#fff' weight='bold' />}
      {text}
      {RightIcon && <RightIcon size={16} color='#fff' weight='bold' />}
    </Container>
  );
}
