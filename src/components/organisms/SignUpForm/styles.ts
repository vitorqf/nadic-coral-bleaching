import { Form } from 'formik';
import Link from 'next/link';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex: 1 1 300px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.zinc[900]};
  border: 1px solid ${props => props.theme.colors.zinc[700]};

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.blue[500]};

  &:hover {
    text-decoration: underline;
  }
`;
