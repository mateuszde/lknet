import styled from 'styled-components';
import { device } from '../../device';

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    padding: 20px;
  }

  /* @media ${device.desktop} {
    max-width: 1200px;
  }

  @media ${device.laptopM} {
    width: 100%;
    padding: 0 20px;
  } */
`;

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 50px;

  @media ${device.desktop} {
    gap: 30px;
  }

  @media ${device.mobileLExtra} {
    justify-content: center;
  }
`;

export const StyledImage = styled.img`
  width: 320px;
  /* height: 300px; */
  object-fit: cover;
  transition: 0.35s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;

  &:hover {
    transform: scale(1.02);
  }

  @media ${device.desktop} {
    width: 22%;
  }
  @media ${device.laptopS} {
    width: 30%;
  }
  @media ${device.mobileXL} {
    width: 47%;
  }

  @media ${device.mobileLExtra} {
    width: 95%;
  }
`;
