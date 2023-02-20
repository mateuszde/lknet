import { useState } from 'react';
import {
  Wrapper,
  NavWrapper,
  LogoWrapper,
  StyledList,
  ListItem,
  StyledNavLink,
  Burger,
} from './style';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [color, setColor] = useState(false);
  const checkbox = document.getElementById('checkbox');

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleTouch = () => {
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      handleToggle();
    }
  };

  const handleChangeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', handleChangeColor);

  return (
    <Wrapper bgcColor={color}>
      <NavWrapper>
        <LogoWrapper>
          <h1>LKNET</h1>
        </LogoWrapper>

        <Burger onClick={handleToggle}>
          <input type="checkbox" id="checkbox" />
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </Burger>

        <StyledList navbarOpen={navbarOpen} onClick={handleTouch}>
          <ListItem>
            <StyledNavLink to="/#header">Strona główna</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/#about-us">O nas</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/#offer">Oferta</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/#header">Galeria</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/#contact">Kontakt</StyledNavLink>
          </ListItem>
        </StyledList>
      </NavWrapper>
    </Wrapper>
  );
};

export default NavBar;
