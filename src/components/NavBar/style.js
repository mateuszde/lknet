import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { device } from '../../device';

export const Wrapper = styled.nav`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: ${({ bgcColor = false }) => (bgcColor ? 'rgba(0, 0, 0, 0.9)' : 'transparent')};
  color: white;
  z-index: 10;
  transition: 0.2s ease;
`;

export const NavWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media ${device.desktop} {
    max-width: 1200px;
  }

  @media ${device.laptopM} {
    width: 100%;
    padding: 0 20px;
  }
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

  @media ${device.laptop} {
    width: 70%;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    margin-right: -250px;
    height: 100vh;
    padding: 100px 20px 20px;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.9);
    transition: 0.3s ease-in-out;
    display: flex;
    transform: ${({ navbarOpen = false }) => (navbarOpen ? 'translate(-250px)' : 'none')};
  }
`;

export const ListItem = styled.li``;

export const StyledNavHashLink = styled(NavHashLink)`
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow2};
  }
`;

export const StyledHashLinkForLogo = styled(StyledNavHashLink)`
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    color: inherit;
  }
`;

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

export const Burger = styled.div`
  width: 40px;
  height: 35px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media ${device.laptop} {
    display: flex;
  }

  & input {
    display: flex;
    width: 60px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    opacity: 0; /* hide input */
    z-index: 3; /* top of the menu */
    &:checked ~ #span1 {
      transform: translateY(5px) rotate(45deg);
    }
    &:checked ~ #span2 {
      transform: translateX(-100%);
      opacity: 0;
    }
    &:checked ~ #span3 {
      transform: translateY(-5px) rotate(-45deg);
    }
  }
  & span {
    width: 40px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    transition: all 0.2s ease-in;
  }
  & #span1 {
    transform: translateY(-10px);
  }
  & #span3 {
    transform: translateY(10px);
  }
`;
