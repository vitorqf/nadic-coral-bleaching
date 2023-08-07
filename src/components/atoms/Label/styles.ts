import { styled } from 'styled-components';

export const StyledLabel = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.25px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Asterisk = styled.span`
  color: ${({ theme }) => theme.colors.red[500]};
`;
