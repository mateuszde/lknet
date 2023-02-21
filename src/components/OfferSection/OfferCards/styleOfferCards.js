import styled from 'styled-components';
import { device } from '../../../device';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media ${device.mobileXL} {
    flex-direction: column;
  }
`;
