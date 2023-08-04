import { styled } from 'styled-components';

const Message = styled.p`
  color: ${({ theme }) => theme.colors.red[500]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.25px;
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export function Error({ message }: { message: string }) {
  return <Message>{message}</Message>;
}
