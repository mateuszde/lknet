import styled from 'styled-components';
import { device } from '../../device';
export const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
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

  @media ${device.laptopM} {
    min-width: 90%;
  }

  @media ${device.mobileLExtra} {
    /* margin-top: 40px; */
    bottom: 0;
    transform: translate(-50%, 5%);
  }

  & h1 {
    text-transform: uppercase;
    margin: 10px 0;
    font-size: 80px;
    color: white;

    @media ${device.mobileLExtra} {
      font-size: 60px;
    }

    @media ${device.mobileLExtraS} {
      font-size: 48px;
    }

    @media ${device.mobileM} {
      font-size: 35px;
    }
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

  @media ${device.laptopM} {
    min-width: 80%;
  }

  @media ${device.laptopS} {
    min-width: 100%;
  }
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

  @media ${device.mobileLExtra} {
    display: none;
  }
`;
