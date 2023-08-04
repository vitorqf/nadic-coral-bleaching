import { Navigator, NavigatorItem, StyledContainer, Wrapper } from './styles';

interface HeaderProps {
  showOnlyLogo?: boolean;
  center?: boolean;
}

export function Header({ showOnlyLogo = false, center = false }: HeaderProps) {
  return (
    <Wrapper>
      <StyledContainer $center={center}>
        <div>Logo</div>
        <Navigator $hidden={showOnlyLogo}>
          <ul>
            <NavigatorItem href='#'>Meus artigos</NavigatorItem>
            <NavigatorItem href='#'>Publicar artigo</NavigatorItem>
          </ul>
        </Navigator>
      </StyledContainer>
    </Wrapper>
  );
}
