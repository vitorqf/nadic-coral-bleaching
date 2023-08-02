import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 8px 0px;
  align-items: center;
  gap: 8px;

  > span {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.25px;

    display: flex;
    flex-direction: column;
  }
`;

export const Numbers = styled.span`
  font-size: 18px;
  color: ${props => props.theme.colors.blue[500]};
`;

export const Circle = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.blue[500]};
`;
