import { Container } from '@/styles/defaults';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.zinc[900]};
`;

export const StyledContainer = styled(Container)<{ $center?: boolean }>`
  align-items: center;
  justify-content: ${props => (props.$center ? 'center' : 'space-between')};
  height: 100%;
  width: 100%;
`;

export const Navigator = styled.nav<{ $hidden?: boolean }>`
  display: ${props => (props.$hidden ? 'none' : 'flex')};

  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const NavigatorItem = styled(Link)<{ $active: boolean }>`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.blue[500] : theme.colors.zinc[500]};

  &:hover {
    color: ${({ $active, theme }) =>
      $active ? theme.colors.blue[400] : theme.colors.zinc[400]};
  }
`;
