import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  color: black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 45px;
  max-width: 200px;
  position: relative;
  text-transform: uppercase;
  vertical-align: middle;
  /* width: 100%; */

  background-color: ${({ theme }) => theme.colors.yellow2};
  font-weight: bold;

  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(254, 220, 0, 0);
  outline: 1px solid;
  outline-color: rgba(254, 220, 0, 0);
  outline-offset: 0px;
  text-shadow: none;
  -webkit-transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  outline-color: rgba(254, 220, 0, 0.5);
  outline-offset: 0px;

  &:hover {
    /* border: 1px solid; */
    box-shadow: inset 0 0 20px rgba(254, 220, 0, 0.5), 0 0 20px rgba(254, 220, 0, 0.2);
    outline-offset: 15px;
    outline-color: rgba(254, 220, 0, 0);
    /* text-shadow: 1px 0px 0px #427388; */
    /* font-weight: bold; */
  }
`;

export const StyledNavHashlink = styled(NavHashLink)`
  text-decoration: none;
  color: inherit;
`;
