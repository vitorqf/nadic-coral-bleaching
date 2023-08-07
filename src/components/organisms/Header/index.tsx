import { Logged } from '@/components/molecules/Logged';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Navigator, NavigatorItem, StyledContainer, Wrapper } from './styles';

interface HeaderProps {
  showOnlyLogo?: boolean;
  center?: boolean;
}

export function Header({ showOnlyLogo = false, center = false }: HeaderProps) {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <Wrapper>
      <StyledContainer $center={center}>
        <div>Logo</div>
        <Navigator $hidden={showOnlyLogo}>
          <ul>
            <NavigatorItem
              $active={router.pathname === '/artigos'}
              href='/artigos'
            >
              Meus artigos
            </NavigatorItem>
            <NavigatorItem
              $active={router.pathname === '/artigos/novo'}
              href='/artigos/novo'
            >
              Publicar artigo
            </NavigatorItem>

            <span>|</span>

            <Logged />
          </ul>
        </Navigator>
      </StyledContainer>
    </Wrapper>
  );
}
