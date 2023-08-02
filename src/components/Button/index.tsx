import { Container } from './styles';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'ghost';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text: string;
};

export function Button({
  type = 'primary',
  leftIcon,
  rightIcon,
  text = 'button',
}: ButtonProps) {
  return (
    <Container $type={type}>
      {leftIcon}
      {text}
      {rightIcon}
    </Container>
  );
}
