import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const StyledRoot = styled(RadixCheckbox.Root)`
  all: unset;
  background-color: ${props => props.theme.colors.zinc[800]};
  width: 26px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.zinc[700]};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.blue[500]};
  }
`;
