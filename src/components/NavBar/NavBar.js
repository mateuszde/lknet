import { useEffect } from 'react';
import { useState } from 'react';
import { Wrapper, NavWrapper, LogoWrapper, StyledList, ListItem, StyledNavLink } from './style';

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

        <StyledList navbarOpen={navbarOpen} onClick={handleTouch}>
          <ListItem>
            <StyledNavLink to="/">Strona główna</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/o-nas">O nas</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/oferta">Oferta</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/kontakt">Galeria</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
          </ListItem>
        </StyledList>
      </NavWrapper>
    </Wrapper>
  );
};

export default NavBar;
