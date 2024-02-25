import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Logo/Logo";
import {
  NavbarContainer,
  NavbarInnerContainer,
  StyledLogo,
  RightContainer,
  NavLink,
  OpenLinksButton,
  NavbarExtendedContainer,
  NavbarLinkExtendedOne,
  NavbarLinkExtendedTwo,
  NavbarLinkExtendedThree,
  NavbarLinkExtendedFour,
} from "./NavbarStyles";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const closeNavbar = () => {
    setExtendNavbar(false);
  };

 

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <StyledLogo>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </StyledLogo>

        <RightContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Projects</NavLink>
          <NavLink to="/planets">About</NavLink>
          <NavLink to="/starships">Contact</NavLink>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((current) => !current);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtendedOne onMenuItemSelect={closeNavbar} to="/">
            Home
          </NavbarLinkExtendedOne>
          <NavbarLinkExtendedTwo to="/characters"> Projects</NavbarLinkExtendedTwo>
          <NavbarLinkExtendedThree to="/planets">
           About
          </NavbarLinkExtendedThree>
          <NavbarLinkExtendedFour to="/starships">
            Contact
          </NavbarLinkExtendedFour>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
