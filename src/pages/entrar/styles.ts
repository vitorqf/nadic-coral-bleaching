import { Container } from '@/styles/defaults';
import { Form } from 'formik';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 112px);
`;

export const StyledContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  width: 450px;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
