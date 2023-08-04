import { styled } from 'styled-components';

type ContainerProps = {
  $type?: 'primary' | 'secondary' | 'ghost';
  $fillContainer?: boolean;
};

export const Container = styled.button<ContainerProps>`
  width: ${props => (props.$fillContainer ? '100%' : 'auto')};

  background: ${props =>
    props.$type === 'primary'
      ? props.theme.colors.blue[500]
      : props.$type === 'secondary'
      ? props.theme.colors.zinc[700]
      : 'transparent'};
  color: white;
  height: 48px;
  border-radius: 4px;
  padding-inline: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  border: 0;
  outline: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;

  cursor: pointer;

  &:hover {
    background: ${props =>
      props.$type === 'primary'
        ? props.theme.colors.blue[600]
        : props.$type === 'secondary'
        ? props.theme.colors.zinc[600]
        : 'transparent'};
  }

  &:active {
    background: ${props =>
      props.$type === 'primary'
        ? props.theme.colors.blue[700]
        : props.$type === 'secondary'
        ? props.theme.colors.zinc[500]
        : 'transparent'};
  }

  &:disabled {
    background: ${props =>
      props.$type === 'primary'
        ? props.theme.colors.zinc[700]
        : props.$type === 'secondary'
        ? props.theme.colors.zinc[700]
        : 'transparent'};
    cursor: not-allowed;
  }
`;
