import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  width: 464px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.zinc[900]};
  border: 1px solid ${props => props.theme.colors.zinc[700]};
`;
