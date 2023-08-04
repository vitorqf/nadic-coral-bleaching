import { styled } from 'styled-components';

export const StyledText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.zinc[500]};
`;
