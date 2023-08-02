import { Container } from './styles';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'ghost';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text: string;
  fillContainer?: boolean;
};

export function Button({
  type = 'primary',
  leftIcon,
  rightIcon,
  text = 'button',
  fillContainer = false,
}: ButtonProps) {
  return (
    <Container $type={type} $fillContainer={fillContainer}>
      {leftIcon}
      {text}
      {rightIcon}
    </Container>
  );
}
