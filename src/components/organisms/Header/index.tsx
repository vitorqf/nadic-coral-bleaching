import { Navigator, NavigatorItem, StyledContainer, Wrapper } from './styles';

export function Header() {
  return (
    <Wrapper>
      <StyledContainer>
        <div>Logo</div>
        <Navigator>
          <ul>
            <NavigatorItem href='#'>Meus artigos</NavigatorItem>
            <NavigatorItem href='#'>Publicar artigo</NavigatorItem>
          </ul>
        </Navigator>
      </StyledContainer>
    </Wrapper>
  );
}
