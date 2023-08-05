import { styled } from 'styled-components';

export const StyledText = styled.p<{ $color?: string }>`
  font-size: 14px;
  color: ${({ theme, $color }) => $color || theme.colors.zinc[500]};
`;
