import { Container } from '@/styles/defaults';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
`;

export const LeftColumn = styled.div`
  max-width: 464px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.blue[500]};
  font-size: 59px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -1.5px;

  > span {
    color: ${props => props.theme.colors.white};
    font-size: 59px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.5px;
  }
`;

export const Description = styled.p`
  align-self: stretch;

  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15px;

  > strong {
    color: ${props => props.theme.colors.blue[500]};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.15px;
  }
`;

export const DetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const DetailedInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > span {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.1px;
  }
`;

export const NumbersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
