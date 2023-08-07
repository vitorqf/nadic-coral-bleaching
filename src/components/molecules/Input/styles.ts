import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.zinc[800]};
  border: none;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.25px;

  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.zinc[600]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[500]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.zinc[700]};
    color: ${({ theme }) => theme.colors.zinc[600]};
    cursor: not-allowed;
  }
`;

export const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  appearance: none;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.zinc[800]};
  border: none;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.25px;

  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.zinc[600]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[500]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.zinc[700]};
    color: ${({ theme }) => theme.colors.zinc[600]};
    cursor: not-allowed;
  }
`;
