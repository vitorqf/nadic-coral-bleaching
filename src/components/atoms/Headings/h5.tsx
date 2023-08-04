import { HeadingProps } from './heading';
import { styled } from 'styled-components';

const StyledH5 = styled.h5`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export function H5({ text, ...rest }: HeadingProps) {
  return <StyledH5 {...rest}>{text}</StyledH5>;
}
