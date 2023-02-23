import { useState } from 'react';
import {
  Wrapper,
  NavWrapper,
  LogoWrapper,
  StyledList,
  ListItem,
  StyledNavLink,
  StyledNavHashLink,
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
            <StyledNavHashLink to="/#header">Strona główna</StyledNavHashLink>
          </ListItem>
          <ListItem>
            <StyledNavHashLink to="/#about-us">O nas</StyledNavHashLink>
          </ListItem>
          <ListItem>
            <StyledNavHashLink to="/#offer">Oferta</StyledNavHashLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/galeria">Galeria</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavHashLink to="/#contact">Kontakt</StyledNavHashLink>
          </ListItem>
        </StyledList>
      </NavWrapper>
    </Wrapper>
  );
};

export default NavBar;
