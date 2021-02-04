import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 14px;
  width: 100%;
  height: 50px;
  padding: 2em;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const NavItem = styled.div`
  display: flex;
`;

export const NavItemLogo = styled(NavItem)`
  justify-content: flex-start;
  height: 28px;
  width: 25%;
  padding-left: 1em;
`;

export const NavItemCenter = styled(NavItem)`
  width: 50%;
  justify-content: center;

  & > p {
    margin: 10px;
    text-transform: uppercase;
  }
`;

export const NavItemRight = styled(NavItem)`
  width: 25%;
  justify-content: flex-end;
  text-transform: uppercase;

  & > p {
    margin: 10px;
  }
`;
