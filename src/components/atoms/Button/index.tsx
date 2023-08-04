import { Circle, Icon } from '@phosphor-icons/react';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  LeftIcon?: Icon;
  RightIcon?: Icon;
  text: string;
  fillContainer?: boolean;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  LeftIcon,
  RightIcon,
  text = 'button',
  fillContainer = false,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <Container $variant={variant} $fillContainer={fillContainer} {...rest}>
      {LeftIcon && <LeftIcon size={16} color='#fff' weight='bold' />}
      {isLoading ? <Circle /> : text}
      {RightIcon && <RightIcon size={16} color='#fff' weight='bold' />}
    </Container>
  );
}
