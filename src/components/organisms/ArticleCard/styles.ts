import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1 0 304px;
  height: 248px;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.zinc[900]};
  border-radius: 8px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 112px;
  width: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  box-sizing: border-box;

  display: flex;
  padding: 8px;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 0;
  width: 100%;
`;
