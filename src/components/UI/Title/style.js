import styled from 'styled-components';

export const StyledTitleH2 = styled.h2`
  font-size: 48px;
  color: ${({ secondary = false }) => (secondary ? 'white' : 'black')};
  position: relative;
  margin: 20px 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 5px;
    background: ${({ theme }) => theme.colors.yellow2};
  }
`;

export const StyledTitleH3 = styled.h3`
  font-size: 24px;
  color: ${({ secondary = false }) => (secondary ? 'white' : 'black')};
  position: relative;
  margin: 20px 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 40px;
    height: 5px;
    background: ${({ theme }) => theme.colors.yellow2};
  }
`;
