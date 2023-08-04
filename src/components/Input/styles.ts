import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const StyledInput = styled.input`
  display: flex;
  padding: 16px;
  align-items: center;
  align-self: stretch;
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
