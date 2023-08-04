import Link from 'next/link';
import { Container } from '@/styles/defaults';
import { styled } from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.zinc[900]};
`;

export const StyledContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const Navigator = styled.nav`
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const NavigatorItem = styled(Link)`
  color: ${props => props.theme.colors.zinc[500]};

  &:hover {
    color: ${props => props.theme.colors.zinc[400]};
  }
`;
