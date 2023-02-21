import styled from 'styled-components';
import { device } from '../../../device';

export const Wrapper = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: space-around;

  @media ${device.laptopS} {
    flex-wrap: wrap;
  }

  @media ${device.mobileXL} {
    flex-direction: column;
  }
`;
