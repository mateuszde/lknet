import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  z-index: 10;
`;

export const NavWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 50px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const ListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow2};
  }
`;
