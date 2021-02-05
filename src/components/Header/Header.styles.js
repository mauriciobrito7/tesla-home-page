import styled from "styled-components";
import { device } from "../../styles/theme";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  font-size: 14px;
  width: 100%;
  height: 50px;
  padding: 2em;
  position: fixed;
  top: 0;
  z-index: 100;
  ${device.desktop`
      font-size: 16px;
  `}
  ${device.large`
      font-size: 19px;
  `}
`;

export const NavItem = styled.div`
  display: flex;
`;

export const NavItemLogo = styled(NavItem)`
  justify-content: flex-start;
  height: 24px;
  width: 25%;
`;

export const NavItemCenter = styled(NavItem)`
  width: 50%;
  justify-content: center;
  inline-size: 70%;
  & > p {
    margin: 10px;
    text-transform: uppercase;
  }
`;

export const NavItemRight = styled(NavItem)`
  width: 75%;
  justify-content: flex-end;
  text-transform: uppercase;
  ${device.desktop`
        width: 25%;
  `}

  & > p {
    margin: 10px;
  }
`;
