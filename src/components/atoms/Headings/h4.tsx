import { styled } from 'styled-components';
import { HeadingProps } from './heading';

const StyledH4 = styled.h4`
  font-size: 33px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.25px;
`;

export function H4({ text, ...rest }: HeadingProps) {
  return <StyledH4 {...rest}>{text}</StyledH4>;
}
