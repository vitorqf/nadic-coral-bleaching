import { styled } from 'styled-components';
import { HeadingProps } from './heading';

const StyledH5 = styled.h5`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export function H5({ text, ...rest }: HeadingProps) {
  return <StyledH5 {...rest}>{text}</StyledH5>;
}
