import { Container } from '@/styles/defaults';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 112px);
  padding-block: 24px;
`;

export const StyledContainer = styled(Container)`
  flex-direction: column;
  gap: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(304px, 1fr));
  gap: 16px;
  width: 100%;
`;
