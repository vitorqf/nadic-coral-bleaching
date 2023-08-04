import { Text } from '@/components/atoms/Text';
import { Copyright, StyledContainer, StyledFooter, StyledLink } from './styles';

export function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <Text text='Todos os direitos reservados' />
        <Copyright>
          <Text text='Copyright © 2022' />
          <StyledLink href='/'>nomesite.com.br</StyledLink>
        </Copyright>
      </StyledContainer>
    </StyledFooter>
  );
}
