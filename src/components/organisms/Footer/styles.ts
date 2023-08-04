import Link from 'next/link';
import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.zinc[900]};
`;

export const Container = styled.div`
  display: flex;
  max-width: 1040px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
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
