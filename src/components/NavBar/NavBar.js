import { useEffect } from 'react';
import { useState } from 'react';
import { Wrapper, NavWrapper, LogoWrapper, StyledList, ListItem, StyledNavLink } from './style';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
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

  return (
    <Wrapper>
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
