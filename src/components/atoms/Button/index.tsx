import { Circle, Icon } from '@phosphor-icons/react';
import { Container, StyledLink } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  LeftIcon?: Icon;
  RightIcon?: Icon;
  href?: string;
  text: string;
  fillContainer?: boolean;
  isLoading?: boolean;
  asLink?: boolean;
}

export function Button({
  asLink = false,
  href,
  variant = 'primary',
  LeftIcon,
  RightIcon,
  text = 'button',
  fillContainer = false,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <>
      {asLink ? (
        <StyledLink
          href={href || '#'}
          $variant={variant}
          $fillContainer={fillContainer}
        >
          {LeftIcon && <LeftIcon size={16} />}
          {text}
          {RightIcon && <RightIcon size={16} />}
        </StyledLink>
      ) : (
        <Container $variant={variant} $fillContainer={fillContainer} {...rest}>
          {LeftIcon && <LeftIcon size={16} color='#fff' weight='bold' />}
          {isLoading ? <Circle /> : text}
          {RightIcon && <RightIcon size={16} color='#fff' weight='bold' />}
        </Container>
      )}
    </>
  );
}
