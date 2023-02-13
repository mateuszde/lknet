import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  min-width: 1200px;
  height: 100%;
  top: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: white;
  transform: translate(-50%, 0);

  & h1 {
    text-transform: uppercase;
    margin: 10px 0;
    font-size: 80px;
    color: white;
  }

  & p {
    color: ${({ theme }) => theme.colors.lightGray};

    &:nth-child(1) {
      text-transform: uppercase;
    }
  }
`;

export const UIWrapper = styled.div`
  width: 70%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ButtonWrapper = styled.div`
  margin-top: 50px;
`;
