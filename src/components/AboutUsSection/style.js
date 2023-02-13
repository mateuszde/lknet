import styled from 'styled-components';

export const AboutUsSectionWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  padding: 50px 0;
  /* background-color: lightgray; */
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  /* flex-direction: column; */
`;

export const StyledParagraph = styled.p`
  font-weight: 500;
`;

export const ColumnWrapper = styled.div`
  width: 650px;

  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    min-height: 540px;

    p {
      padding: 10px 0;

      &:last-child {
        margin-bottom: 20px;
      }
    }
  }
`;

export const StyledColumnWrapper = styled(ColumnWrapper)`
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
  border-top: 5px solid ${({ theme }) => theme.colors.yellow2};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.35s ease;

  ${StyledColumnWrapper}:hover & {
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.35s ease;

  ${StyledColumnWrapper}:hover & {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
