import Link from 'next/link';
import { Container, Copyright, StyledFooter, StyledLink } from './styles';
import { Text } from '@/components/atoms/Text';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Text text='Todos os direitos reservados' />
        <Copyright>
          <Text text='Copyright © 2022' />
          <StyledLink href='/'>nomesite.com.br</StyledLink>
        </Copyright>
      </Container>
    </StyledFooter>
  );
}
