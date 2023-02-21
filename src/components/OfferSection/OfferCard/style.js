import styled from 'styled-components';
import { device } from '../../../device';

export const Wrapper = styled.div`
  width: 500px;
  min-height: 340px;
  padding: 0 30px 30px 30px;
  border-top: 5px solid ${({ theme }) => theme.colors.yellow2};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;

  @media ${device.laptopS} {
    width: 45%;
  }

  @media ${device.mobileXL} {
    width: 90%;
    margin: 40px auto;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const ListWrapper = styled.div`
  margin-top: 30px;
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const LIstItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const ListSquare = styled.div`
  height: 7px;
  width: 7px;
  margin-right: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
  background-color: ${({ theme }) => theme.colors.yellow2};
`;
