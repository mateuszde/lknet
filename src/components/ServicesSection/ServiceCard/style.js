import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* border: 1px solid red; */
  border-top: 5px solid ${({ theme }) => theme.colors.yellow2};
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */

  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.35s ease;

  ${Wrapper}:hover & {
    transform: scale(1.1);
  }
`;

export const TitleSectionContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  padding-left: 20px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.35s ease;

  ${Wrapper}:hover & {
    background-color: rgba(0, 0, 0, 0.35);
  }
`;

export const TextContainer = styled.div`
  /* min-height: 200px; */
  /* height: auto; */
  padding: 20px;
`;
