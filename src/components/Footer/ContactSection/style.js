import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../../device';

export const ContacSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileXL} {
    flex-direction: column;
  }
`;

export const ColumnWrapper = styled.div`
  width: 300px;
  padding: 0 20px;

  @media ${device.tablet} {
    width: 45%;
  }

  @media ${device.mobileXL} {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const CompanyDetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const Icon = styled(FontAwesomeIcon)``;

export const IconWrapper = styled.div`
  width: 35px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
`;

export const StyledIcon = styled(Icon)`
  font-size: 14px;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
`;
