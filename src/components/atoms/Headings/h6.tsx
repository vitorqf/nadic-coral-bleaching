import { styled } from 'styled-components';
import { HeadingProps } from './heading';

const StyledH6 = styled.h6`
  font-size: 17px;
  font-style: normal;
  font-weight: medium;
  line-height: normal;
  letter-spacing: 0.15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export function H6({ text, ...rest }: HeadingProps) {
  return <StyledH6 {...rest}>{text}</StyledH6>;
}
