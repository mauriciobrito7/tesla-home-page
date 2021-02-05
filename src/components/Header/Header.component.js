import React from "react";
import TeslaLogo from "../../assets/svg/teslaLogoSmall.svg";
import useMedia from "../../hooks/useMedia";
import { Nav, NavItemLogo, NavItemCenter, NavItemRight } from "./Header.styles";
import { breakpoints } from "../../styles/theme";

export const Header = () => {
  const desktop = useMedia(breakpoints.desktop);
  return (
    <Nav>
      <NavItemLogo>
        <img src={TeslaLogo} alt="" />
      </NavItemLogo>
      {desktop && (
        <NavItemCenter>
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Solar Roof</p>
          <p>Solar Panels</p>
        </NavItemCenter>
      )}

      <NavItemRight>
        <p>Shop</p>
        <p>Tesla Account</p>
      </NavItemRight>
    </Nav>
  );
};
