import { styled } from 'styled-components';

export const Wrapper = styled.button`
  color: ${props => props.theme.colors.zinc[500]};
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  gap: 8px;

  display: flex;
  cursor: pointer;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.1px;
`;

export const Name = styled.span`
  color: white;
`;
