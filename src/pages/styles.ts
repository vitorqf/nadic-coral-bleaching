import { Container } from '@/styles/defaults';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 48px);
  background: url('/assets/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 16px;
`;

export const StyledContainer = styled(Container)`
  gap: 24px;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1 0 444px;
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
  display: flex;
  flex-flow: column;

  > span {
    color: ${props => props.theme.colors.white};
    font-size: 59px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.5px;
  }

  @media (max-width: 768px) {
    font-size: 48px;

    > span {
      font-size: 48px;
    }
  }

  @media (max-width: 480px) {
    font-size: 32px;

    > span {
      font-size: 32px;
    }
  }
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15px;
  text-align: justify;

  > strong {
    color: ${props => props.theme.colors.blue[500]};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.15px;
  }
`;
