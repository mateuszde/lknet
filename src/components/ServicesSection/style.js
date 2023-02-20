import styled from 'styled-components';
import { device } from '../../device';

export const ServicesSectionWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  padding: 50px 0;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    max-width: 1200px;
  }

  @media ${device.laptopM} {
    width: 100%;
    padding: 0 20px;
  }
`;
