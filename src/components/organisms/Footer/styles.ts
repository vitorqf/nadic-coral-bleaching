import { Container } from '@/styles/defaults';
import Link from 'next/link';
import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.zinc[900]};

  @media (max-width: 768px) {
    height: 64px;
  }
`;

export const StyledContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4px;
  }
`;

export const Copyright = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue[500]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
