import { Form } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 164px);
  padding: 24px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex: 1 0 500px;
  flex-direction: column;
  gap: 16px;
`;

export const FileFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
