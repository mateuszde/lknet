import styled from 'styled-components';
import { device } from '../../device';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 50px;
  color: white;

  & p {
    color: ${({ theme }) => theme.colors.lightGray};
    padding: 2px 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px;

  @media ${device.desktop} {
    width: 100%;
  }
`;

export const CopyrightWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

export const MissionWrapper = styled.div`
  max-width: 450px;
  padding: 0 20px;
`;
